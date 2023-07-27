# Tutorial: Tic-Tac-Toe

From React Documentation: [Tutorial: Tic-Tac-Toe](https://react.dev/learn/tutorial-tic-tac-toe).

## building the board

create a square for button in **Square.js** and a matrix of squares in **Board.js**.

pass the `value` of button from **Board** to **Square** through props

## making an interactive component

create React State `values`, an array of 9, to store clicked position (`value`) on the **Board**
```
const [values, setValues] = useState(Array(9).fill(null));
```
where `values = [null, null, null, null, null, null, null, null, null]`

never pass parameter to function using parentheses inside props
```
<Square value={values[0]} onClick={handleClick(0)} />
```
error: too many re-renders. react limits the number of renders to prevent an infinite loop

instead, nest an arrow function inside props
```
<Square value={values[0]} onClick={() => handleClick(0)} />
```

immutability of array supports complex feature (e.g. "time travel")

mutate data: 
```
values[0] = 'X';
```

without mutate data: 
```
const nextValues = values.slice();
nextValues[0] = 'X';
setValues(nextValues);
```

## taking turns

use conditional to switch symbol for different player

prevent button being clicked twice by returning early

## declaring a winner

helper function, uses little or no variable, is put at the end of the file

## storing a history of moves

create an array of `values` to store history of moves, `values` is replaced with `history`
```
const [history, setHistory] = useState([Array(9).fill(null)]);
const currentValues = history[history.length - 1];
```

spread syntax (JS) is used to copy previous values (`currentValues`) to current values in `setHistory`
```
setHistory([...history, nextValue]);
```

array method `map` in matrix
```
const moves = history.map((values, move) => {

}
```
where `values == history[move]`

every listItem must have a unique key when rendering a list

```
return (
  <li key={move}></li>
)
```

## implementing time travel

current move == history.length - 1

create React State for `currentMove`, which update `onClick`

## final cleanup

remove redundant state: xIsNext can be calculated with currentMove
