import React, { Component } from 'react';
import '../css/App.css';
import Board from './Board';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: 1,
      board: {},
      piece: 2,
      orientation: 'vertical',
      hoverPiece: [],
      placedPieces: []
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

  handlePlace(square) {
    let placedPieces = this.state.placedPieces;
    let x = square.substring(1);
    let y = square.substring(0, 1);

    if (this.state.orientation === 'vertical') {
      for (let i = 0; i < this.state.piece; i++) {
        placedPieces.push(y + x);
        y = String.fromCharCode(y.charCodeAt(0) + 1);
      }
    } else {
      for (let i = 0; i < this.state.piece; i++) {
        placedPieces.push(y + x);
        x++;
      }
    }
    this.setState({
      placePieces: placedPieces
    })
  }

  handleHover(square) {
    let hoverPiece = [];
    let x = square.substring(1);
    let y = square.substring(0, 1);

    if (this.state.orientation === 'vertical') {
      for (let i = 0; i < this.state.piece; i++) {
        hoverPiece.push(y + x);
        y = String.fromCharCode(y.charCodeAt(0) + 1);
      }
    } else {
      for (let i = 0; i < this.state.piece; i++) {
        hoverPiece.push(y + x);
        x++;
      }
    }
    this.setState({
      hoverPiece: hoverPiece
    });
  }

  handleMouseOut() {
    this.setState({
      hoverPiece: []
    })
  }

  render() {
    return(
      <div className='App'>
        <Board onHover={this.handleHover.bind(this)}
               onPlace={this.handlePlace.bind(this)}
               onMouseOut={this.handleMouseOut.bind(this)}
               player={this.state.player}
               board={this.state.board}
               piece={this.state.piece}
               hoverPiece={this.state.hoverPiece}
               placedPieces={this.state.placedPieces}
        />
      </div>
    );
  }
}

export default App;