import React from 'react';
import NavItem from './NavItem.jsx';

const FlightsNavigation = () => (
    <div className="flights__content-navigation">
      <NavItem title="Departures" type="departures" />
      <NavItem title="Arrivals" type="arrivals" />
    </div>
  );

export default FlightsNavigation;
