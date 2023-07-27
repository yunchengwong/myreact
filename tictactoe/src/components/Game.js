import React, { useState } from 'react'
import Board from './Board'

function Game() {
  const [xIsNext, setXIsNext] = useState(true);

  const [history, setHistory] = useState([Array(9).fill(null)]);

  const [currentMove, setCurrentMove] = useState(0);
  const currentValues = history[currentMove];

  function handlePlay(nextValue) {
    const nextHistory = [...history.slice(0, currentMove), nextValue];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }

  const moves = history.map((values, move) => {
    let desricption;
    if (move > 0) {
      desricption = "Go to move #" + move;
    }
    else {
      desricption = "Go to game start"
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desricption}</button>
      </li>
    )
  });

  return (
    <div>
      <div>
        <Board values={currentValues} xIsNext={xIsNext} onPlay={handlePlay} />
      </div>
      <div>
        {moves}
      </div>
    </div>
  )
}

export default Game