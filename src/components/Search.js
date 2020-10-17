import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Search.css';

const Search = ({ title }) => {
  return (
    <Fragment>
      <div className="search-wrapper">
        <h2 className="search__title">{title}</h2>
        <div className="search__main">
          <input
            type="text"
            placeholder="Search..."
            className="search__query"
          />
          <button type="submit" className="search__btn">
        Search
          </button>
        </div>
      </div>
    </Fragment>
  );
};

Search.defaultProps = {
  title: 'Search For Drink Recipes',
};

Search.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Search;
