import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import './Search.css';
import DrinkItem from './DrinkItem';
const Search = ({ title }) => {
  const [text, setText] = useState('');
  const [drinks, setDrinks] = useState('');
  const [alert, setAlert] = useState('');

  const searchDrinks = async (text) => {
    const API_URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`;
    const res = await fetch(API_URL);
    const data = await res.json();
    const results = data.drinks.map((drink) => (
    <DrinkItem key={drink.strDrink} drink={drink}></DrinkItem>
 
    ));
    setDrinks(results);
  };

  const onChange = (e) => setText(e.target.value);

  const handleClick = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Enter A Correct Query', 'danger');
    } else {
      searchDrinks(text);
    }
  };

  return (
    <Fragment>
      <div className="search-wrapper">
        <h2 className="search__title">{title}</h2>
        <div className="search__main">
          <input
            type="text"
            placeholder="Search..."
            className="search__query"
            onChange={onChange}
          />
          <button type="submit" className="search__btn" onClick={handleClick}>
            Search
          </button>
        </div>
      </div>
      <div className="grid-container">{drinks}</div>
    </Fragment>
  );
};
export default Search;
