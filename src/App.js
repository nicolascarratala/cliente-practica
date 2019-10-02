import React from 'react';
import logo from './logo.svg';
import './App.css';
import FedeComponent from './FedeComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FedeComponent></FedeComponent>
        <a
          className="App-link"
          href="google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          ir a google
        </a>
      </header>
    </div>
  );
}

export default App;
