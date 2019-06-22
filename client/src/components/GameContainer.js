import React from 'react';
import PlayerStatBox from './PlayerStatBox.js';
import PromptTextBox from './PromptTextbox.js';
import WorldMap from './WorldMap.js';
import ActionButtonBar from './ActionButtonBar';
import AnimationBox from './AnimationBox';
import CharacterIcon from './CharacterIcon';
import backgroundImg from './../images/cabinInside.jpg';

const gameContainerStyle = {
    backgroundImage: `url(${backgroundImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    display: 'flex',
    flexDirection: 'row'
};

const infoDivStyle = {
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center', 
    width: '35%'
};

const actionDivStyle= {
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '64%'   
};

export default class GameContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    componentDidMount(){
        console.log(this.props);
        
    }
    render(){
        return(
        <div style= {gameContainerStyle}>
            <div style= {infoDivStyle}>
                <WorldMap/>
                <CharacterIcon image= {this.props.player.image}/>
                <PlayerStatBox player={this.props.player}/>
            </div>
            <div style= {actionDivStyle}>
                <AnimationBox/>
                <PromptTextBox passage= {this.props.passage} />
                {this.props.passage && <ActionButtonBar // check prop HERE, only render ActionButtonBar when it's ready.
                    player = {this.props.player}
                    passage= {this.props.passage}
                    takeItem= {(newItem)=> this.props.takeItem(newItem)} 
                    nextPassage= {(nextPassage, action)=>this.props.nextPassage(nextPassage,action)}/>}
            </div>
        </div>
        )
    }
}