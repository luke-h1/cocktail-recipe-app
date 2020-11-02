import React, { Fragment,useState } from 'react';
import { Link } from 'react-router-dom';
import './DrinkItem.scss';

function DrinkItem(props) {
  const [item, setItem] = useState([]);

  const addDrinksToPage = (drink) => {
    const recipe = [];
    for (let i = 1; i <= 20; i++) {
      if (props.drink[`strIngredients${i}`]) {
        recipe.push(
          `${drink[`strIngredients${i}`]} - ${drink[`strMeasures${i}`]}`
        );
        setItem(recipe);
      } else {
        return;
      }
    }
  };

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
            <p className="test">
              {}
              {props.drink.strIngredient1
                ? props.drink.strIngredient1
                : null} -{' '}
              {props.drink.strMeasure1 ? props.drink.strMeasure1 : null}
            </p>

            <p className="test">{props.drink.strInstructions}</p>
          </div>
        </Link>
      </div>
    </Fragment>
  );
}
export default DrinkItem;
