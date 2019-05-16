import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerStatBox from './components/PlayerStatBox.js';
import PromptTextBox from './components/PromptTextbox.js';
import WorldMap from './components/WorldMap.js';

function App() {
  return (
    <div className="App">
      <WorldMap/>
      <PromptTextBox />
      <PlayerStatBox />
    </div>
  );
}

export default App;
