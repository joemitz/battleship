import React, { Component } from 'react';
import '../css/App.css';
import Board from './Board';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: 1,
      board: {},
      square: ''
    };
    this.board = {};
  }

  componentDidMount() {
    let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    alpha.forEach(letter => {
      for (let i = 1; i <= 10; i++) {
        this.board[letter + i.toString()] = '';
      }
    });
    this.setState({board: this.board});
  }

  handleClick(square) {
    if (this.state.player === 1) {
      this.setState({player: 2});
    } else {
      this.setState({player: 1});
    }
    this.setState({square: square});
    this.board[square] = 'X';
    this.setState({board: this.board});
  }

  render() {
    return(
      <div className='App'>
        <Board onClick={this.handleClick.bind(this)} player={this.state.player}
               square={this.state.square} board={this.state.board}/>
      </div>
    );
  }
}

export default App;