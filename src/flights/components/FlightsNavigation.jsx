import React from 'react';
import NavItem from './NavItem.jsx';

const FlightsNavigation = () => (
  <div className="flights__content-navigation">
    <NavItem type="departures" />
    <NavItem type="arrivals" />
  </div>
);

export default FlightsNavigation;
