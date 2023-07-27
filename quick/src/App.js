import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';
import AboutPage from './components/AboutPage';
import Profile from './components/Profile';
import ShoppingList from './components/ShoppingList';

function App() {
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
    </div>
  );
}

export default App;
