import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import TicTacToe from './components/TicTacToe';

class App extends Component {
  render() {
    return (
      <center>
        <TicTacToe />
      </center>
    );
  }
}

export default App;
