import React from 'react';
import '../css/Board.css';

const Board = (props) => {
  const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  const cols = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  return (
    <div id='board'>
      <table>
        <tbody>
          {rows.map((row) => {
            return (
            <tr>
              {cols.map((col) => {
                return (
                <td id={row + col} onClick={props.onClick.bind(this, row + col)}>
                  {props.board[row + col]}
                </td>)
              })}
            </tr>)
          })}
        </tbody>
      </table>
      <p>{props.square.toUpperCase()}</p>
    </div>
  );
};

export default Board;