import React from 'react';
import './App.css';
import Navbar from './components/Layout/Navbar';
import Alert from './components/Layout/Alert';
import DrinkState from './context/drink/drinkState';
import AlertState from './context/alert/AlertState';
import Home from './components/pages/Home';
import Search from './components/Search';
function App() {
  return (
    <DrinkState>
      <AlertState>
        <div className="App">
          <Navbar />
          <Home />
          <Search />
        </div>
      </AlertState>
    </DrinkState>
  );
}

export default App;
