import { useState } from 'react';
import './App.css';
import InputBar from './components/InputBar';
import Counter from './components/Counter';
import Greeting from './components/Greeting';
import ClickButton from './components/ClickButton';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import UserApi from './components/UserApi';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [inputValue, setInputValue] = useState('');

  function toggleLogin() {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      setUsername('');
    } else {
      setUsername(inputValue);
      setIsLoggedIn(true);
      setInputValue(''); // Clear input after login
    }
  }

  return (
    <Router>
      <div>
        {isLoggedIn ? (
          <>
           <header className='header-bar'> <nav>
              <Link to="/">Home, </Link>
              <Link to="/contact">Contact, </Link>
              <Link to="/about">About, </Link>
              <Link to="/UsersList">UserList</Link>
            </nav></header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/UsersList" element={<UserApi/>} />
            </Routes>
            <Greeting name={username} />
            <h1>This is my app!</h1>
            <InputBar />
            <ClickButton />
            <Counter />
            <div>
              <h1>Welcome back, {username}!</h1>
              <button onClick={toggleLogin}>Log out</button>
            </div>
          </>
        ) : 
        (
          <div>
            <h1>Please log in to continue</h1>
            <input
              type="text"
              placeholder="username"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={toggleLogin}>Log in</button>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;