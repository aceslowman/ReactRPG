import React from 'react';

import StartMenu from './components/StartMenu';
import GameContainer from './components/GameContainer';

const styles = {
  app: {
    width: '100%',
    height: '100%'
  }
};

export default class App extends React.Component{
  constructor(){
    super();

    this.state = {
      renderStartMenu: true
    }
  }

  startGame(initialState){
    console.log(initialState);
    let characterId = '5ce75c3a228b950a81d4ad30';
        
    fetch(`/api/playercharacters/${characterId}`)
    .then(res=>res.json())
    .then((player)=>{
      console.log(initialState);
      this.setState({ 
        playerCharacter: {
          ...player,
          image: initialState.image,
          name: initialState.name,
        },
        renderStartMenu: false 
      });
    });
  }

  render(){
    return (   
        <div className="App" style={styles.app}>          
            {this.state.renderStartMenu ? (
              <StartMenu gameStarted={(initialState) => this.startGame(initialState)} />
            ) : (
              <GameContainer player={this.state.playerCharacter}/>
            )}          
        </div>
    );
  }
}