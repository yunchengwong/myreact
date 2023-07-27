import React from 'react'

function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }
  return (
    <button onClick={handleClick}>I'm a Button</button>
  )
}

export default MyButton