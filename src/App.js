import React, { Component } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';


class App extends Component {
  render() {
    return (
      <div className = 'tc'>
         <Nav />
         <Cards />
      </div>
    )
  }
}

export default App;
