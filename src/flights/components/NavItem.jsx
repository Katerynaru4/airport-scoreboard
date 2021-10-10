import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import classnames from 'classnames';
import { useQuery } from '../flights.utils';


const NavItem = ({ title, type }) => {
  const query = useQuery();
  const link = query.get('search')
    ? `/${type}?search=${query.get('search')}`
    : `/${type}`;

  const activeType = useLocation().pathname.slice(1);
  return (
    <Link to={link} className="flights__nav-link">
      <button
        className={classnames(
          'flights__navigation-item',
          activeType === type ? 'active' : ''
        )}
      >
        {type === 'departure' ? (
          <i className="material-icons icon-flight">flight_takeoff</i>
        ) : (
          <i className="material-icons icon-flight">flight_land</i>
        )}
        {title}
      </button>
    </Link>
  );
};

NavItem.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default NavItem;
