import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Home = ({ title }) => {
  return (
    <Fragment>
      <div className="container">
        <h1 className="container__title">
          {title}{' '}
          <span role="img" aria-label="drink">
            🍹
          </span>
        </h1>
      </div>
    </Fragment>
  );
};

Home.defaultProps = {
  title: 'Search For Drinks',
};

Home.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Home;
