import React, { Fragment } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Search from './components/Search/Search';
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
