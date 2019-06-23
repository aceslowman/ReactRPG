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
      renderStartMenu: true,
      isFighting: false,
      // enemies: {
      //   drake: {
      //     name: "Drake",
      //     AP: 15,
      //     HP: 10,
      //     friendly: false,
      //   }
      // }
    };
  }
  startGame(initialState){
    //console.log(initialState);
    let characterId = initialState._id;
    let passageId = '5d01c49f8f136e04960d1ac7';
    
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
    console.log(nextPassage);
    let passageId = nextPassage._id; 
    
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

  takeItem(newItem){
    let newItems = this.state.playerCharacter.items;
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
            player={this.state.playerCharacter} 
            passage={this.state.passage} 
            nextPassage= {(nextPassage)=> this.nextPassage(nextPassage)} 
            takeItem= {(newItem)=> this.takeItem(newItem)}
            isFighting= {this.state.isFighting}/>
          )
        }          
      </div>      
    );
  }
}