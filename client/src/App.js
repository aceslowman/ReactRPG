import React from 'react';

import StartMenu from './components/StartMenu';
import GameContainer from './components/GameContainer';

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      renderStartMenu: true
    };
  }
  startGame(initialState){
    console.log(initialState);
    let characterId = initialState._id;
        
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
        <div className="App" >          
            {this.state.renderStartMenu ? (
              <StartMenu gameStarted={(initialState) => this.startGame(initialState)} />
            ) : (
              <GameContainer player={this.state.playerCharacter}/>
            )}          
        </div>      
    );
  }
}