import React from 'react';

import StartMenu from './components/StartMenu';
import GameContainer from './components/GameContainer';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const styles = {
  app: {
    width: '100%',
    height: '100%'
  }
};

function App() {
  return (
    <Router>
      <div style={styles.app} className="App">
        <ul>
          <li><Link to="/">Start Menu</Link></li>
          <li><Link to="/game/">Game</Link></li>
        </ul>
        <div>
          <Route path= "/" exact component={StartMenu}/>
          <Route path= "/game/" component={GameContainer}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
