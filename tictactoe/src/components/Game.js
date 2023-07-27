import React, { useState } from 'react'
import Board from './Board'

function Game() {
  const [xIsNext, setXIsNext] = useState(true);

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentValues = history[history.length - 1];

  function handlePlay(nextValue) {
    setHistory([...history, nextValue])
    setXIsNext(!xIsNext);
  }
  return (
    <div>
      <Board values={currentValues} xIsNext={xIsNext} onPlay={handlePlay} />
    </div>
  )
}

export default Game