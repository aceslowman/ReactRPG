import React from 'react';

import StartMenu from './components/StartMenu';
import GameContainer from './components/GameContainer';

//import GameLogic from './GameLogic';

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
    };
  }
  
  startGame(initialState){
    console.log(initialState);
    let characterId = initialState._id;
    let passageId = '5cf4a056439d6b0b0d1b7306'
    
    fetch(`/api/playercharacters/${characterId}`)
    .then(res=>res.json())
    .then((player)=>{
        this.setState({ 
        playerCharacter: {
          ...player,
          image: initialState.image,
          name: initialState.name,
        },
        renderStartMenu: false 
      });
    });

    fetch(`/api/passages/${passageId}`)
    .then(res=>res.json())
    .then((passage)=>{
      this.setState({
        passage: {...passage} 
      });
    });
  }

  nextPassage(nextPassage){

    this.setState({passage: nextPassage})
  }

  render(){
    return (   
        <div className="App" style={styles.app}>          
            {this.state.renderStartMenu ? (
              <StartMenu gameStarted={(initialState) => this.startGame(initialState)} />
            ) : (
              <GameContainer player={this.state.playerCharacter} passage={this.state.passage} nextPassage= {(nextPassage)=> this.nextPassage(nextPassage)} />
            )}          
        </div>      
    );
  }
}