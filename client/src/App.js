import React from 'react';
import PlayerStatBox from './components/PlayerStatBox.js';
import PromptTextBox from './components/PromptTextbox.js';
import WorldMap from './components/WorldMap.js';

import backgroundImg from './images/cabinInside.jpg';


const appStyle = {
  backgroundImage: `url(${backgroundImg})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '800px',
}



function App() {
  return (
    <div className="App" style= {appStyle}>
      
        <WorldMap/>
        <PromptTextBox />
        <PlayerStatBox />
    </div>
  );
}

export default App;
