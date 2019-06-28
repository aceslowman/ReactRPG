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
      enemy: '',
      loadingText: false,
    };
  }
  
  startGame(initialState){
    //console.log(initialState);
    let characterId = initialState._id;
    let passageId = '5d01c49f8f136e04960d1ac7';
    //passageId = '5d0e91d5a0ec272c2cceec34'; //go straight to drake battle 
    
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

  // componentDidUpdate(){
  //   console.log('Current Enemy:',this.state.enemy);
  // }

  nextPassage(nextPassage, action){
    let passageId = nextPassage._id; 
    console.log(nextPassage);
    
    if(nextPassage.isFight){
      let index;
      if (nextPassage.nonPlayerCharacters.length > 1){
        // grab random if there are more than one enemies
        index = Math.floor(nextPassage.nonPlayerCharacters.length * Math.random());
      }else{ 
        // or grab only element
        index = 0;
      }   
      let currentEnemy = nextPassage.nonPlayerCharacters[index];   
      this.setState({ enemy: currentEnemy });
    }

    if(typeof this.state.passage.nextPassages[0].path.actions[0] !== 'object' ){
      console.log('Hit Leaf', 'fetch begins');
      this.setState({loadingText: true});
      fetch(`/api/passages/${passageId}`)
      .then(res=>res.json())
      .then((passage)=>{
        this.setState({
          passage: {...passage},
          loadingText: false 
        });
      }); 
      console.log(this.state); 
    } else{
      this.setState({passage: nextPassage});
      console.log(this.state);
    } 
  }

  fight(action, props){    
    gameLogic(action, props);
    this.setState({});

    if (!this.state.passage.isFight){
      console.log("Fight Over");
      console.log("App State: ", this.state);
      if(props.player.HP !== 0){
        this.nextPassage(props.passage.nextPassages[0].path);
      }else{
        this.nextPassage(props.passage.nextPassages[1].path);
      }
    }
    console.log("After action: ", this.state);
    this.setState({});
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
            enemy= {this.state.enemy} 
            passage={this.state.passage} 
            nextPassage= {(nextPassage,action)=> this.nextPassage(nextPassage,action)} 
            takeItem= {(newItem)=> this.takeItem(newItem)}
            fight= {(action, props)=> this.fight(action, props)}
            loadingText= {this.state.loadingText}/>
          )
        }          
      </div>      
    );
  }
}