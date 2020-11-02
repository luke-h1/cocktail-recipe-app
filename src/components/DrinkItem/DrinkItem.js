import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './DrinkItem.scss';

function DrinkItem(props) {
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
            <p className="cards__item-recipe">Measurements & recipe:</p>
            <ul className="cards__item-list">
              <li className="list-item">
                {props.ingredient} - {props.measurement}
                {/* <pre>{JSON.stringify(props.drinkLog, null, 2)}</pre>
                <pre>{JSON.stringify(props.measurementLog, null, 2)}</pre> */}
              </li>
            </ul>
            <p className="test">{props.drink.strInstructions}</p>
          </div>
        </Link>
      </div>
    </Fragment>
  );
}
export default DrinkItem;
