import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const FlightLine = ({ flight }) => {
  const { flightType } = useParams();

  const flightStatus =
    flightType === 'depatures'
      ? `Departed at ${moment(flight.timeDepFact).format('HH:MM')}`
      : `Landed ${moment(flight.timeLandFact).format('HH:MM')}`;
      
  const destination =
    flightType === 'departures'
      ? flight['airportToID.name_en']
      : flight['airportFromID.name_en'];

  return (
    <tr className="flights-content__list-item">
      <td className="flight-field ">
        <span className="terminal">{flight.term}</span>
      </td>
      <td className="flight-field">{moment(flight.actual).format('HH:MM')}</td>
      <td className="flight-field">{destination}</td>
      <td className="flight-field">{flightStatus}</td>
      <td className="flight-field">
        <img
          src={flight.airline.en.logoSmallName}
          alt={flight.airline.en.name}
        />
        {flight.airline.en.name}
      </td>
      <td className="flight-field">{flight.codeShareData[0].codeShare}</td>
    </tr>
  );
};

FlightLine.propTypes = {
  flight: PropTypes.object.isRequired,
};

export default FlightLine;
