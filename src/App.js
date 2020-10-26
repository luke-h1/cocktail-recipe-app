import React, { Fragment } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Home from './Pages/Home';
import Search from './components/Search/Search';
import {BrowserRouter, Route, Switch} from 'react-router-dom';



function App() {
  return (
    <Fragment>
      <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} /> 
      </Switch>      
      </BrowserRouter>
    </Fragment>
  );
}
export default App;
