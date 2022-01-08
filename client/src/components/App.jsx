import React, { Component } from 'react';
import {hot} from 'react-hot-loader';
import '../css/App.css';
import Board from './Board';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: 1,
      board: {}
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.player === 1) {
      this.setState({player: 2});
    } else {
      this.setState({player: 1});
    }
  }

  render() {
    return(
      <div className='App'>
        <Board onClick={this.handleClick} player={this.state.player} />
      </div>
    );
  }
}

export default hot(module)(App);