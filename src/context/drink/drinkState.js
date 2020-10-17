import React, { useReducer } from 'react';
import DrinkContext from './drinkContext';
import DrinkReducer from './drinkReducer';

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
    loaading: false,
  };

  const [state, dispatch] = useReducer(drinkReducer, initialState);

  // SEARCH DRINKS

  // GET SINGLE DRINK

  // CLEAR DRINKS

  // SET LOADING

  return (
    <DrinkContext.Provider
      value={{
        drinks: state.drinks,
        singleDrink: state.singleDrink,
        loading: state.loading,
        // searchDrinks,
        // searchSingleDrink,
      }}
    >
      {props.children}
    </DrinkContext.Provider>
  );
};
export default DrinkState;
