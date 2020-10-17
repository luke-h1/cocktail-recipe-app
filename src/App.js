import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Search from './components/Search'
function App() {
  return (
    <div className="App">
      <Header /> 
      <Home />  
      <Search /> 
      </div>
  );
}

export default App;
