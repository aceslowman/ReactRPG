import React from 'react';
import StartMenu from './components/StartMenu';
import Audio from './components/Audio/Audio';
import ActionAudio from './components/Audio/ActionAudio';
import BattleAudio from './components/Audio/BattleAudio';
import GameContainer from './components/GameContainer';
import gameLogic from './components/GameLogic/GameLogic';
import OptionsWindow from './components/OptionsWindow';


const styles = {
  app: {
    width: '100%',
    height: '100%',
    display:'flex',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  }
};

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      renderStartMenu: true,
      enemy: '',
      loadingText: false,
      volume:1,
      playing: true,
      audiofile:'',
      looping: true,
      passage: {
        location: 'STARTMENU',
        isFight: false
      },
      clickSound: '',
      fightTurn: true,
      openOptionsWindow:false
    };
  }
  
  startGame(initialState){
    //console.log(initialState);
    let characterId = initialState._id;
    let passageId = '5d01c49f8f136e04960d1ac7';
    //passageId = '5d0e91d5a0ec272c2cceec34'; //go straight to drake battle 
    passageId = '5d0e56477314d23a931bb3d4'; // go striaght to crossroads
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
    console.log('NextPassage:', nextPassage);
    
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


    this.state.passage.nextPassages.forEach((i)=> {
      let fightComing= false;
      i.path.nextPassages.forEach((j)=>{
        if( j.path.isFight){
          fightComing= true;
          console.log('fight coming');
        }
      });
      if(fightComing){
        fetch(`/api/passages/${passageId}`)
        .then(res=>res.json())
        .then((passage)=>{
          this.setState({
            passage: {...passage},
            loadingText: false 
          });
        }); 
      }
    });
    
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
      console.log('Regular NxtPass');
    } 
    this.setState({});
  }

  fight(action, props){    
    gameLogic(action, props);
    this.setState({});
    this.switchTurn(action); 
    if (!this.state.passage.isFight){
      if(props.player.HP !== 0 && action.class !== 'FLEE'){
        this.nextPassage(props.passage.nextPassages[0].path);
      }else if(props.player.HP === 0 && action.class === 'FLEE'){
        this.nextPassage(props.passage.nextPassages[2].path);
      }
      else if(action.class === 'FLEE'){
        this.nextPassage(props.passage.nextPassages[1].path);
      }
      else{
        this.nextPassage(props.passage.nextPassages[2].path);
      }
    }
  }

  switchTurn(action){ 
    if(action.class === 'FIGHT'){
      if(this.state.fightTurn){
        this.setState({fightTurn: false});
      }else{
        this.setState({fightTurn: true});
      }
    }

  }

  takeItem(newItem, props){
    if(newItem.name === 'Gold'){
        let spoils = Math.round(Math.random()*5);
        let player = props.player;
        player.gold += spoils;
    }else{
      let newItems = props.player.items;
      newItems.push(newItem);
      this.setState({items: newItems });
    }
    
  }
  clickSound(type){
    this.setState({
      clickSound: type
    })
  }

  updateAudio(type, param, val){
  console.log([type,val]);
    this.setState({
    [type+param]: val
    })
  }

  toggleOptions() {
    console.log("show options", this.state)
    this.setState({openOptionsWindow:!this.state.openOptionsWindow});
}

  render(){
    return (   
      <div className="App" style={styles.app}>
        <OptionsWindow 
          updateAudio={(type, param ,val)=>this.updateAudio(type,param,val)} 
          modalOpen={this.state.openOptionsWindow}
          toggleOptions={()=>this.toggleOptions()}
        />       
        {this.state.renderStartMenu ? (
          <StartMenu
            toggleOptions={()=>this.toggleOptions()}
            gameStarted={(initialState) => this.startGame(initialState)}
            updateAudio={(type, param ,val)=>this.updateAudio(type, param , val)} />
            //updateBattleAudio={(type,val)=>this.updateBattleAudio(type,val)} />
            //updateActionAudio={(type,val)=>this.updateActionAudio(type,val)} />
          ) : (
          <GameContainer
            toggleOptions={()=>this.toggleOptions()}
            player={this.state.player}
            enemy= {this.state.enemy} 
            passage={this.state.passage} 
            nextPassage= {(nextPassage,action)=> this.nextPassage(nextPassage,action)} 
            takeItem= {(newItem, props)=> this.takeItem(newItem, props)}
            fight= {(action, props)=> this.fight(action, props)}
            clickSound={(v)=>this.clickSound(v)}
            loadingText= {this.state.loadingText}
            fightTurn= {this.state.fightTurn}/>
          )
        }

         <Audio
          gameStarted={!this.state.renderStartMenu}
          volume={this.state.bgvolume}
          looping={this.state.looping}
          playing={this.state.playing}
          audiofile= {this.state.audiofile}
          passage= {this.state.passage} />
         
        {this.state.passage ? <BattleAudio 
          volume={this.state.battlevolume}
          looping={this.state.looping}
          playing={this.state.playing}
          audiofile= {this.state.audiofile}
          passage= {this.state.passage} 
          enemy= {this.state.enemy}/>
        : null}  
        {this.state.passage ? <ActionAudio 
          volume={this.state.actionvolume}
          looping={this.state.looping}
          playing={this.state.playing}
          audiofile= {this.state.audiofile}
          passage= {this.state.passage} 
          enemy= {this.state.enemy}
          clickSound= {this.state.clickSound}
          fightTurn= {this.state.fightTurn}
          />
        : null} 
      </div>      
    );
  }

}