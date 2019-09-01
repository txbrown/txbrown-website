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
        <img src={process.env.PUBLIC_URL +"/barbacue__season_cover.png"} className="App-logo" alt="logo" />
       <Links />
      </header>
    </div>
  );
}

export default App;
