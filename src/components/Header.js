import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
const Header = ({ title }) => {
  return (
    <Fragment>
      <header className="header">
        <h1>
          {title}
          <span role="img" aria-label="drink">
            🍻
          </span>
        </h1>
      </header>
    </Fragment>
  );
};

Header.defaultProps = {
  title: 'Drink Recipe App',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
