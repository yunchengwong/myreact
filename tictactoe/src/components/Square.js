import React from 'react'
import '../App.css';

function Square({ value }) {
  return (
    <button className='square'>
      {value}
    </button>
  )
}

export default Square