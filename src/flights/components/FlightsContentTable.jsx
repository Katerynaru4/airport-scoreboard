import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContentTableHead from './ContentTableHead.jsx';
import { getFlightsSelector } from '../flights.selectors';
import FlightLine from './FlightLine.jsx';

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

const mapState = (state) => ({
    flights: getFlightsSelector(state),
  });

FlightsContentTable.propTypes = {
  selectedFlight: PropTypes.object,
  flights: PropTypes.object.isRequired,
};

export default connect(mapState)(FlightsContentTable);
