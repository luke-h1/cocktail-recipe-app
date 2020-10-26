import React, { Fragment } from 'react';
import Header from '../components/Header/Header';
import HomePage from '../components/HomePage/HomePage';
import Search from '../components/Search/Search';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HomePage />
      <Search />
    </Fragment>
  );
};
export default Home;
