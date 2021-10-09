import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SearchField from './SearchField.jsx';
import ShowFlights from './ShowFlights.jsx';

const Flights = () => {
  return (
    <div className="flights">
      <h2 className="flights__title">Search Flight</h2>
      <BrowserRouter>
        <SearchField />
        <ShowFlights />
      </BrowserRouter>
    </div>
  );
};

export default Flights;
