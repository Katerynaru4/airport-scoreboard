import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation, Switch, Route } from 'react-router-dom';
import NotFound from './NotFound.jsx';
import PropTypes from 'prop-types';
import * as flightsActions from '../flights.actions.js';
import {
  getDeparturesFlightsSelector,
  getArrivalsFlightsSelector,
} from '../flights.selectors.js';
import { useQuery, getSearchingFlight } from '../flights.utils.js';
import FlightsContentTable from './FlightsContentTable.jsx';

const FlightsContent = ({ getFlights, depaturesFlights, arrivalsFlights }) => {
  useEffect(() => {
    getFlights();
  }, []);

  const flightTypes = {
    '/departures': depaturesFlights,
    '/arrivals': arrivalsFlights,
  };

  let query = useQuery();
  let searchingFlightNumber = query.get('search');

  let searchedFlight = null;

  if (searchingFlightNumber) {
    searchedFlight = getSearchingFlight(
      flightTypes[useLocation().pathname],
      searchingFlightNumber
    );
  }
  return searchedFlight !== undefined ? (
    <Switch>
      <Route exact path="/:flightType">
        <FlightsContentTable selectedFlight={searchedFlight} />
      </Route>
    </Switch>
  ) : (
    <NotFound />
  );
};

FlightsContent.propTypes = {
  depaturesFlights: PropTypes.array.isRequired,
  arrivalsFlights: PropTypes.array.isRequired,
  getFlights: PropTypes.func.isRequired,
};

const mapDispatch = {
  getFlights: flightsActions.getFlights,
};

const mapState = (state) => {
  return {
    depaturesFlights: getDeparturesFlightsSelector(state),
    arrivalsFlights: getArrivalsFlightsSelector(state),
  };
};
export default connect(mapState, mapDispatch)(FlightsContent);
