import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import classnames from 'classnames';
import { useQuery } from '../flights.utils';

const NavItem = ({ type }) => {
  const query = useQuery();
  const link = query.get('search')
    ? `/${type}?search=${query.get('search')}`
    : `/${type}`;

  const activeType = useLocation().pathname.slice(1);
  const btnCn = classnames(
    'flights__navigation-item',
    activeType === type ? 'active' : ''
  );

  return (
    <Link to={link} className="flights__nav-link">
      <button className={btnCn}>
        {type === 'departures' ? (
          <i className="material-icons icon-flight">flight_takeoff</i>
        ) : (
          <i className="material-icons icon-flight">flight_land</i>
        )}
        {type}
      </button>
    </Link>
  );
};

NavItem.propTypes = {
  type: PropTypes.string.isRequired,
};

export default NavItem;
