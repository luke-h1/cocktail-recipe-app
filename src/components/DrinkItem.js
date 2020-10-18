import React, { Fragment } from 'react';
import './drinkItem.css';

const drinkItem = (props) => {
  return (
    <Fragment>
      <div className="drink-card">
        <div className="img-container">
          <img src={props.drink.strDrinkThumb} alt="" loading="lazy" />
        </div>
        <h3 className="drink__card-title">{props.drink.strDrink}</h3>
        <p className="drink-description">{props.drink.strInstructions}</p>
      </div>
    </Fragment>
  );
};
export default drinkItem;
