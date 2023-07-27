import Square from './Square'
import '../App.css';

function Board({ values, xIsNext, onPlay }) {

  const winner = calculateWinner(values);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  }
  else {
    status = "Next player: " + (xIsNext ? 'X' : 'O');
  }

  function handleClick(i) {
    if (values[i] || calculateWinner(values)) {
      return;
    }
    const nextValue = values.slice();
    if (xIsNext) {
      nextValue[i] = 'X';
    }
    else {
      nextValue[i] = 'O';
    }
    onPlay(nextValue);
  }

  return (
    <>
      <div className='status'>{status}</div>
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

function calculateWinner(values) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < 8; i++) {
    const [a, b, c] = lines[i];
    if (values[a] === values[b] && values[b] === values[c] && values[a] === values[c]) {
      return values[a];
    }
  }
  return null;
}