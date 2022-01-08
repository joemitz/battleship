import React from 'react';
import {hot} from 'react-hot-loader';
import '../css/Board.css';

const Board = (props) => {
  return (
    <table>
      <tbody>
        <tr>
          <td onClick={props.onClick}>{props.player}</td>
          <td>4</td>
          <td>3</td>
        </tr>
        <tr>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td>7</td>
          <td>8</td>
          <td>9</td>
        </tr>
      </tbody>
    </table>
  );
};

export default hot(module)(Board);