import React, { Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Search from './components/Search';
function App() {
  return (
    <Fragment>
      <Header />
      <HomePage />
      <Search />
    </Fragment>
  );
}

export default App;
