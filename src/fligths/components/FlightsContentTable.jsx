import React from 'react';
import { useParams } from 'react-router-dom';
import ContentTableHead from './ContentTableHead.jsx';
import { connect } from 'react-redux';
import { getFlightsSelector } from '../flights.selectors';
import FlightLine from './FlightLine.jsx';
import PropTypes from 'prop-types';

const FlightsContentTable = ({ selectedFlight, flights }) => {
  const selectedFlights = flights[useParams().flightType.slice(0, -1)];

  return (
    <div className="flights__content-table">
      <table className=" content-table">
        <ContentTableHead />
        <tbody className="flights-content__list">
          {selectedFlight ? (
            <FlightLine flight={selectedFlight} />
          ) : (
            selectedFlights.map((flight) => (
              <FlightLine key={flight.ID} flight={flight} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

const mapState = (state) => {
  return {
    flights: getFlightsSelector(state),
  };
};

FlightsContentTable.propTypes = {
  selectedFlight: PropTypes.object,
  flights: PropTypes.object.isRequired,
};

export default connect(mapState)(FlightsContentTable);
