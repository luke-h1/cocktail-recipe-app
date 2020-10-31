import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './DrinkItem.scss';

const DrinkItem = (props) => {
  return (
    <Fragment>
      <div className="cards__item">
        <Link className="cards__item__link" to="">
          {' '}
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
        </Link>
      </div>
    </Fragment>
  );
};
export default DrinkItem;
