import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
const Header = ({ title, icon }) => {
  return (
    <Fragment>
      <nav className="header">
        <h1>
          {title}
          <span role="img" aria-label="drink">
            {icon}
          </span>
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
