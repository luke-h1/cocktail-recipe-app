import React, { useReducer } from 'react';
import DrinkContext from './drinkContext';
import DrinkReducer from './drinkReducer';
import axios from 'axios';
import {
  SEARCH_DRINKS,
  GET_DRINK,
  CLEAR_DRINKS,
  SET_LOADING,
  SET_ALERT,
  REMOVE_ALERT,
} from '../types';
import drinkReducer from './drinkReducer';

const DrinkState = (props) => {
  const initialState = {
    drinks: '',
    singleDrink: '',
    loading: false,
  };

  const [state, dispatch] = useReducer(drinkReducer, initialState);

  // SEARCH DRINKS
  const searchDrinks = async (searchTerm) => {
    const res = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
    );
    dispatch({
      type: SEARCH_DRINKS,
      payload: res.data.drinks,
      // I THINK THE ABOVE IS RIGHT IDK THO 🤷‍♂️
    });
    console.log(res.data);
  };

  // GET SINGLE DRINK

  // CLEAR DRINKS

  // SET LOADING

  return (
    <DrinkContext.Provider
      value={{
        drinks: state.drinks,
        singleDrink: state.singleDrink,
        loading: state.loading,
        searchDrinks,
        // searchSingleDrink,
      }}
    >
      {props.children}
    </DrinkContext.Provider>
  );
};
export default DrinkState;
