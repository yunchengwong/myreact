import './App.css';
import { useState } from 'react'

function App() {
  const [data, setData] = useState('')

  fetch('/users')
  .then(response => response.text())
  .then(data => setData(data));
  return (
    <div className="App">
      {data}
    </div>
  );
}

export default App;
