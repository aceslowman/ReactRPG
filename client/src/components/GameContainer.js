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
    height: '800px',
    display: 'flex'
};

const infoDivStyle = {
    float: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center', 
    width: '35%'
};

const actionDivStyle= {
    float: 'right',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'   
};

export default class GameContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            player: {}
        };
    }
    componentDidMount(){
        let characterId = '5ce75c3a228b950a81d4ad30'
        
        fetch(`/api/playercharacters/${characterId}`)
        .then(res=>res.json())
        .then(player => this.setState({player}, ()=>{
            console.log(`player data fetched..`, this.state)
            })
        );
        
    }
    render(){
        return(
        <div style= {gameContainerStyle}>
        <div style= {infoDivStyle}>
        <WorldMap/>
        <CharacterIcon/>
        <PlayerStatBox player= {this.state.player}/>
        </div>
        <div style= {actionDivStyle}>
        <AnimationBox/>
        <PromptTextBox />
        <ActionButtonBar />
        </div>
        </div>
        )
    }
}