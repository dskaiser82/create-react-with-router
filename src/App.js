import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './pages/Home/Home.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Use a Prop */}
        <Home/>
      </header>
    </div>
  );
}

export default App;
