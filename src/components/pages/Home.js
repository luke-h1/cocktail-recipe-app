import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import Drinks from '../Drinks';
const Home = ({ title, intro }) => {
  return (
    <Fragment>
      <div className="container">
        <div className="container__intro-container">
          <h1 className="container__title">
            {title}{' '}
            <span role="img" aria-label="drink">
              🍹
            </span>
          </h1>
          <p className="container__intro">{intro}</p>
        </div>
      </div>
      <Drinks />
    </Fragment>
  );
};

Home.defaultProps = {
  title: 'Search For Drinks',
  intro:
    'Enter your Favorite drink or click the random button to get some ideas on what to drink tonight !',
};

Home.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
};

export default Home;