import React, { Fragment } from 'react';
import Image1 from '../images/Image1.jpeg';

const DrinkItem = () => {
  return (
    <Fragment>
      <div className="drink-card">
        <div className="drink-card__img-container">
          <img src={Image1} alt="" loading="lazy" />
        </div>
        <h3 className="drink__card-title">Drink Goes here</h3>
        <p>TODO: PUT ROUTE TO INDIVIDUAL DRINK HERE </p>
      </div>
    </Fragment>
  );
};
// TODO: PASS PROPS IN HERE MAP THRU EACH ITEM IN ARR 

export default DrinkItem; 