import React, { Fragment } from 'react';
import './drinkItem.css';

const drinkItem = (props) => {
  return (
    <div className="container">
      <h1>{props.strDrink}</h1>
      <p className="quote"></p>
      <p className="author"></p>
    </div>
  );
};
export default drinkItem;
