import React from 'react';
import PropTypes from 'prop-types';
import ContentTableHead from './ContentTableHead.jsx';
import FlightLine from './FlightLine.jsx';

const FlightsContentTable = ({ selectedFlight, selectedFlights }) => (
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

FlightsContentTable.propTypes = {
  selectedFlight: PropTypes.object,
  selectedFlights: PropTypes.array,
};

export default FlightsContentTable;
