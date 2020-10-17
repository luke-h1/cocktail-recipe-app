import React from 'react';
import './App.css';
import Navbar from './components/Layout/Navbar';
import Home from './components/Home';
import Search from './components/Search';
import About from './components/pages/About';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DrinkState from './context/drink/drinkState';
import AlertState from './context/alert/AlertState';
function App() {
  return (
    <DrinkState>
      <AlertState>
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Navbar />
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
            <Home />
            <Search />
          </BrowserRouter>
        </div>
      </AlertState>
    </DrinkState>
  );
}

export default App;
