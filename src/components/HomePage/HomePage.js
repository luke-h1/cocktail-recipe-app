import React from 'react';
import PropTypes from 'prop-types';
import './HomePage.scss';
const HomePage = ({ intro }) => {
  return (
    <>
      <div className="container">
        <h1 className='home__intro'>{intro}</h1>
      </div>
    </>
  );
};
HomePage.defaultProps = {
  intro:
    'Enter your Favorite drink to get some ideas on what to drink tonight !',
};

HomePage.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
};

export default HomePage;
