function MyButtonCopy({ count, onClick }) {

  return (
    <button onClick={onClick}>
      I'm a Button<br />
      Clicked {count} times
    </button>
  )
}

export default MyButtonCopy