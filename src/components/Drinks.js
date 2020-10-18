import React, { useContext } from 'react';
import DrinkItem from './DrinkItem';
import Loading from './Layout/Loading';
import DrinkContext from '../context/drink/drinkContext';
import './Drinks.css';

const Drinks = ({ drinks }) => {
  const drinkContext = useContext(DrinkContext);
  const { loading, searchDrinks } = drinkContext;
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="grid-container">
        {console.log(drinks)} {/* returns undefined  */}
        {console.log(searchDrinks)} {/* returns the function / method  */}


        {/* TODO: MAP THRU DRINKS HERE FROM DRINK STATE */}
      </div>
    );
  }
};

export default Drinks;
