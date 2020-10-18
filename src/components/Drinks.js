import React, { useContext } from 'react';
import DrinkItem from './DrinkItem';
import Loading from './Layout/Loading';
import DrinkContext from '../context/drink/drinkContext';
import './Drinks.css';

const Drinks = () => {
  const drinkContext = useContext(DrinkContext);
  const { drinks, loading} = drinkContext;

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="grid-container">
        
        hello
      </div>
    );
  }
};

export default Drinks;

// const names = ["whale", "squid", "turtle", "coral", "starfish"];

// const NamesList = () => (
//   <div>
//     <ul>{names.map(name => <li key={name}> {name} </li>)}</ul>
//   </div>

// {console.log(drinks)} {/* returns undefined  */}
//         console.log({drinks.map((drink) => (
//           <DrinkItem key={drink.idDrink} drink={drinks}></DrinkItem>
//         ))})
//         {console.log(searchDrinks)} {/* returns the function / method  */}
//         {/* TODO: MAP THRU DRINKS HERE FROM DRINK STATE */}
