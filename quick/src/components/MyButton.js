import React, { useState } from 'react'

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    alert('You clicked me!');
    setCount(count + 1);
  }
  return (
    <button onClick={handleClick}>
      I'm a Button<br />
      Clicked {count} times
    </button>
  )
}

export default MyButton