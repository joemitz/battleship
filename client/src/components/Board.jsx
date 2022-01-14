import React from 'react';
import '../css/Board.css';

const Board = (props) => {
  const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  const cols = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  return (
    <div id='board'>
      <table onMouseOut={props.onMouseOut}>
        {rows.map((row) => {
          return (
          <tr>
            {cols.map((col) => {

              if (props.hoverPiece.includes(row + col)) {
                return (
                  <td id={row + col} class='hovered'
                    onClick={props.onPlace.bind(this, row + col)}
                    onMouseOver={props.onHover.bind(this, row + col)}>
                    {props.board[row + col]}
                  </td>)

              } else if (props.placedPieces.includes(row + col)) {
                return (
                  <td id={row + col} class='placed'
                    onClick={props.onPlace.bind(this, row + col)}
                    onMouseOver={props.onHover.bind(this, row + col)}>
                    {props.board[row + col]}
                  </td>)

              } else {
                return (
                  <td id={row + col}
                    onClick={props.onPlace.bind(this, row + col)}
                    onMouseOver={props.onHover.bind(this, row + col)}>
                    {props.board[row + col]}
                  </td>)
              }
            })}
          </tr>)
        })}
      </table>
    </div>
  );
};

export default Board;