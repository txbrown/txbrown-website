import React from 'react';
import './App.css';
import Links from './Links';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          TXBROWN
        </p>
        <a href="https://smarturl.it/barbecue-season" target="_blank" rel="noopener">
        <img src={process.env.PUBLIC_URL +"/barbacue__season_cover.png"} className="App-logo" alt="logo" />
        </a>
       <Links />
      </header>
    </div>
  );
}

export default App;
