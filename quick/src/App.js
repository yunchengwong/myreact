import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';
import AboutPage from './components/AboutPage';
import Profile from './components/Profile';
import ShoppingList from './components/ShoppingList';
import { useState } from 'react';
import MyButtonCopy from './components/MyButtonCopy';

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div className="App">
      <h1>Welcome to my app</h1>
      <MyButton />
      <AboutPage />
      <img className="avatar" src={logo} alt="" />
      <Profile />
      {1 < 2 ? <MyButton /> : <AboutPage />}
      {1 > 2 ? <MyButton /> : <AboutPage />}
      {1 < 2 && <Profile />}
      <ShoppingList />
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
      <h1>Counters that update together</h1>
      <MyButtonCopy count={count} onClick={handleClick} />
      <MyButtonCopy count={count} onClick={handleClick} />
    </div>
  );
}

export default App;
