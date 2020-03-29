import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './pages/Home/Home.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home name="I'm a Prop Bruh" />
        {/* <img src={logo} className="App-logo" alt="logo" />  */}
      </header>
    </div>
  );
}

export default App;
