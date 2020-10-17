import React, { Fragment, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import './Search.css';
import DrinkContext from '../context/drink/drinkContext';
import AlertContext from '../context/alert/alertContext';
const Search = ({ title }) => {
  const drinkContext = useContext(DrinkContext);
  const alertContext = useContext(AlertContext);
  const [query, setQuery] = useState('');
  const [drinks, setDrinks] = useState('');
  const [singleDrink, setSingleDrink] = useState('');
  const onChange = (e) => setQuery(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (query === '') {
      alertContext.setAlert('Enter A Correct Query', 'danger');
    } else {
      drinkContext.searchDrinks(query);
      setQuery('');
    }
  };
  return (
    <Fragment>
      <div className="search-wrapper">
        <h2 className="search__title">{title}</h2>
        <form className="search__main" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Search..."
            className="search__query"
            onChange={onChange}
          />
          <button type="submit" className="search__btn">
            Search
          </button>
        </form>
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
