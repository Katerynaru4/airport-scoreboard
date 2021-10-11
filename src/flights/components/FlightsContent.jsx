import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import NotFound from './NotFound.jsx';
import * as flightsActions from '../flights.actions';
import {
  getDeparturesFlightsSelector,
  getArrivalsFlightsSelector,
} from '../flights.selectors';
import { useQuery, getSearchingFlight } from '../flights.utils';
import FlightsContentTable from './FlightsContentTable.jsx';

const FlightsContent = ({ getFlights, depaturesFlights, arrivalsFlights }) => {
  useEffect(() => {
    getFlights();
  }, []);

  const flightTypes = {
    '/departures': depaturesFlights,
    '/arrivals': arrivalsFlights,
  };

  const query = useQuery();
  const flightType = useLocation().pathname;
  const searchingFlightNumber = query.get('search');

  let searchedFlight = null;

  if (searchingFlightNumber) {
    searchedFlight = getSearchingFlight(
      flightTypes[flightType],
      searchingFlightNumber
    );
  }

  return searchedFlight !== undefined ? (
    <Switch>
      <Route exact path="/:flightType">
        <FlightsContentTable
          selectedFlight={searchedFlight}
          selectedFlights={flightTypes[flightType]}
        />
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

const mapState = (state) => ({
  depaturesFlights: getDeparturesFlightsSelector(state),
  arrivalsFlights: getArrivalsFlightsSelector(state),
});

export default connect(mapState, mapDispatch)(FlightsContent);
