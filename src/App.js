import React, { Fragment, useState } from 'react';
import './App.scss';
import Home from './Pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SingleDrink from './components/SingleDrink/SingleDrink';

function App() {
  const [drink, setDrink] = useState([]);

  const getDrink = async (id) => {
    const ID_URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}
    `;
    const res = await fetch(ID_URL);
    const data = await res.json();
    const results = data.drinks.map((drink) => (
      <SingleDrink key={drink.strDrink} drink={drink} />
    ));
    setDrink(results);
  };

  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/drink/:id"
            render={(props) => (
              <SingleDrink {...props} getDrink={getDrink} drink={drink} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}
export default App;
