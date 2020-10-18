import React, { Fragment } from 'react';
import Image1 from './Images/Image1.jpeg';

const DrinkItem = ({ drinks }) => {

  return (
    <Fragment>
      
      <div className="drink-card">
        <div className="drink-card__img-container">
          <img src={Image1} alt="" loading="lazy" />
        </div>
        <h3 className="drink__card-title">hello</h3>
        <p>Drink</p>
      </div>
    </Fragment>
  );
};

export default DrinkItem;
