import React, { useContext } from 'react';
import DrinkItem from './DrinkItem';
import Loading from './Layout/Loading';
import DrinkContext from '../context/drink/drinkContext';
import './Drinks.css';

const Drinks = () => {
  const drinkContext = useContext(DrinkContext);
  const { loading, drinks } = drinkContext;
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="grid-container">
        {drinks.map((drink) => (
          <DrinkItem key={drink.idDrink} drink={drink}></DrinkItem>
        ))}
      </div>
    );
  }
};

export default Drinks;
