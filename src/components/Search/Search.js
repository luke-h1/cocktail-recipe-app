import React, { useState } from 'react';
import './Search.scss';
import DrinkItem from '../DrinkItem/DrinkItem';
const Search = ({ title }) => {
  const [text, setText] = useState('');
  const [drinks, setDrinks] = useState('');
  const [alert, setAlert] = useState('');

  const showError = (msg) => {
    setAlert(msg);
  };

  const searchDrinks = async (text) => {
    try {
      const API_URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`;
      const res = await fetch(API_URL);
      const data = await res.json();
      const results = data.drinks.map((drink, i) => (
        <DrinkItem
          key={drink.strDrink}
          drink={drink}
          ingredient={drink[`strIngredient${i}`]}
          measurement={drink[`strMeasure${i}`]}
        ></DrinkItem>
      ));
      setDrinks(results);
    } catch (e) {
      showError(
        `Can't find that drink. Reloading page in 2 seconds (Error: ${e})`
      );
      console.log(`Error: ${e}`);
      setTimeout(() => {
        window.location.href =
          window.location.pathname +
          window.location.search +
          window.location.hash;
      }, 2500);
    }
  };

  const onChange = (e) => setText(e.target.value);

  const handleClick = (e) => {
    e.preventDefault();
    if (text === '') {
      return;
    } else {
      searchDrinks(text);
    }
  };

  return (
    <>
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
      <div className="grid-container">
        {alert ? <h2 className="alert">{alert}</h2> : drinks}
      </div>
    </>
  );
};
export default Search;
