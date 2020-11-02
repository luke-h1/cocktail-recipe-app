import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
const Header = ({ title, icon }) => {
  return (
    <>
      <nav className="header">
        <h1>
          {title}
          <span role="img" aria-label="drink">
            {icon}
          </span>
        </h1>
      </nav>
    </>
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
