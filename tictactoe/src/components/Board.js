import Square from './Square'
import '../App.css';
import React, { useState } from 'react'

function Board() {
  const [values, setValues] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    if (values[i]) {
      return;
    }
    const nextSquares = values.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    }
    else {
      nextSquares[i] = 'O';
    }
    setValues(nextSquares);
    setXIsNext(!xIsNext);
  }
  return (
    <>
      <div className='board-row'>
        <Square value={values[0]} handleClick={() => handleClick(0)} />
        <Square value={values[1]} handleClick={() => handleClick(1)} />
        <Square value={values[2]} handleClick={() => handleClick(2)} />
      </div>
      <div className='board-row'>
        <Square value={values[3]} handleClick={() => handleClick(3)} />
        <Square value={values[4]} handleClick={() => handleClick(4)} />
        <Square value={values[5]} handleClick={() => handleClick(5)} />
      </div>
      <div className='board-row'>
        <Square value={values[6]} handleClick={() => handleClick(6)} />
        <Square value={values[7]} handleClick={() => handleClick(7)} />
        <Square value={values[8]} handleClick={() => handleClick(7)} />
      </div>
    </>
  )
}

export default Board
