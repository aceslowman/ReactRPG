import React from 'react';

import StartMenu from './components/StartMenu';
import GameContainer from './components/GameContainer';

import {BrowserRouter as Router, Route, Link} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li><Link to="/">Start Menu</Link></li>
        <li><Link to="/game/">Game</Link></li>
      </ul>
        <div>
          <Route path="/" exact component={StartMenu} />
          <Route path="/game/" component={GameContainer} />
          {/* <Route path="/game/settings" exact component={GameSettings} /> */}
        </div>
    </div>
    </Router>
  );
}

export default App;
