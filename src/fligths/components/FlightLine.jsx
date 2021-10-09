import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom'

const FlightLine = ({ flight }) => {
  return (
    <tr className="flights-content__list-item">
      <td className="flight-field ">
        <span className="terminal">{flight.term}</span>
      </td>
      <td className="flight-field">{moment(flight.actual).format('HH:MM')}</td>
      <td className="flight-field">
        {flight['airportFromID.name_en']
          ? flight['airportFromID.name_en']
          : flight['airportToID.name_en']}
      </td>
      <td className="flight-field">{`Landed ${moment(
        flight.timeLandFact
      ).format('HH:MM')}`}</td>
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
