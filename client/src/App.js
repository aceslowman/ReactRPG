import React from 'react';
import StartMenu from './components/StartMenu';
import GameContainer from './components/GameContainer';
import gameLogic from './components/GameLogic/GameLogic';

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
      renderStartMenu: true,
      player: '',
      enemy: ''
    };
  }
  
  startGame(initialState){
    //console.log(initialState);
    let characterId = initialState._id;
    let passageId = '5d01c49f8f136e04960d1ac7';
    passageId = '5d0e91d5a0ec272c2cceec34'; //go straight to battle 
    
    fetch(`/api/playercharacters/${characterId}`)
    .then(res=>res.json())
    .then((player)=>{
        this.setState({ 
        player: {
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

  nextPassage(nextPassage, action){
    let passageId = nextPassage._id; 

    /*
      if the passage contains an enemy, load it into the App state!
      You need it on hand so that the enemy info can be passed into 
      specific child components.
    */
    console.log(nextPassage);
    if(nextPassage.nonPlayerCharacters.length > 0){
      // now grab enemy and pass to state.
      let index;
      if (nextPassage.nonPlayerCharacters.length > 1){
        // grab random if there are more than one enemies
        index = Math.floor(nextPassage.nonPlayerCharacters.length * Math.random());
      }else{ 
        // or grab only element
        index = 0;
      }

      this.setState({ enemy: nextPassage.nonPlayerCharacters[index] });
    }

    if(typeof this.state.passage.nextPassages[0].path.actions[0] !== 'object' ){
      fetch(`/api/passages/${passageId}`)
      .then(res=>res.json())
      .then((passage)=>{
        this.setState({
          passage: {...passage} 
        });
      });  
    } else{
      this.setState({passage: nextPassage});
    }  
  }

  /* 
    STATE here is not properly named, you are not using the App state, you are passing
    a collection of props. I think you could utilize the App state instead.
  */

  fight(action, state){
    // TEMPORARY OVERRIDE
    state = this.state;

    gameLogic(action, state);
    let newPlayerHP = state.player.HP;
    // this.setState({palyer: {HP: newPlayerHP}}); 
    this.setState({})
    if (!state.passage.isFight){
      console.log("Fight Over");
      console.log("App State: ", this.state)
      if(state.player.HP !== 0){
        this.nextPassage(state.passage.nextPassages[0].path);
      }else{
        this.nextPassage(state.passage.nextPassages[1].path);
      }
    }
  }

  takeItem(newItem){
    let newItems = this.state.player.items;
    newItems.push(newItem);
    this.setState({items: newItems});
  }

  render(){
    return (   
      <div className="App" style={styles.app}>          
        {this.state.renderStartMenu ? (
          <StartMenu 
            gameStarted={(initialState) => this.startGame(initialState)} />
          ) : (
          <GameContainer 
            player={this.state.player} 
            enemy={this.state.enemy}
            passage={this.state.passage} 
            nextPassage= {(nextPassage,action)=> this.nextPassage(nextPassage,action)} 
            takeItem= {(newItem)=> this.takeItem(newItem)}
            fight= {(action, state)=> this.fight(action, state)}
            />
          )
        }          
      </div>      
    );
  }
}