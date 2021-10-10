import React from 'react';
import  FlightsNavigation  from './FlightsNavigation.jsx';
import FlightsContent from './FlightsContent.jsx';


const ShowFlights = () => (
    <div className="flights__content-conteiner">
      <FlightsNavigation />
      <FlightsContent /> 
    </div>
  );

export default ShowFlights;
