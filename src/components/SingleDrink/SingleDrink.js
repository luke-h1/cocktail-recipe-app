import React from 'react';

const SingleDrink = (props) => {
  return (
    <div>
      <div className="cards__item">
        <figure
          className="cards__item__pic-wrap"
          data-category={props.drink.strCategory}
        >
          <img
            src={props.drink.strDrinkThumb}
            alt="Travel"
            className="cards__item__img"
          />
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{props.drink.strDrink}</h5>
        </div>
      </div>
    </div>
  );
};
export default SingleDrink;
