import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Header = ({ title, icon }) => {
  return (
    <Fragment>
      <nav className="header">
        <h1>
          {title}
          <span role="img" aria-label="drink">
            {icon}
          </span>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </h1>
      </nav>
    </Fragment>
  );
};

Header.defaultProps = {
  title: 'Drink Recipe App',
  icon: '🍺',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Header;
