import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './DrinkItem.scss'

const DrinkItem = (props) => {
  return (
    <Fragment>
      <div className="cards__item">
        <Link className="cards__item__link" to={`/${props.id}`}>
          <figure className="cards__item__pic-wrap" data-category={props.drink.strDrink}>
            <img src={props.drink.strDrinkThumb} alt="Travel" className="cards__item__img" />
          </figure>
          <div className="cards__item__info">
          </div>
        </Link>
      </div>
    </Fragment>
  );
};
export default DrinkItem