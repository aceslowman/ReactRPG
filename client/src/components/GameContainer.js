import React from 'react';
import PlayerStatBox from './PlayerStatBox.js';
import PromptTextBox from './PromptTextbox.js';
import WorldMap from './WorldMap.js';
import ActionButtonBar from './ActionButtonBar';
import AnimationBox from './AnimationBox';
import CharacterIcon from './CharacterIcon';
import BackgroundImage from './BackgroundImage';


const styles = {
    gameContainerStyle: {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },   
    infoDivStyle:  {
        padding: '5px 15px 15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center', 
        width: '35%'
    },
    actionDivStyle: {
        padding: '15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '64%'
    }
};

export default class GameContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        };
    }
    componentDidMount(){
        //console.log(this.props); 
    }

    render(){        
        return(
            <div style= {{...styles.gameContainerStyle}}>
                <div style={{position:'absolute', zIndex:-100, height: '100%', width: '100%', overflow: 'hidden'}}>
                   <BackgroundImage passage = {this.props.passage}/>
                </div>
            
                <div style= {{...styles.infoDivStyle}}>
                    <WorldMap/>
                    <CharacterIcon image= {this.props.player.image}/>
                    <PlayerStatBox player={this.props.player}/>
                </div>
                <div style= {{...styles.actionDivStyle}}>
                    <AnimationBox
                        player = {this.props.player}
                        enemy= {this.props.enemy}
                        passage= {this.props.passage}
                        fightTurn= {this.props.fightTurn}/>
                    <PromptTextBox 
                        passage= {this.props.passage}
                        loadingText= {this.props.loadingText} />
                    {(this.props.passage && !this.props.loadingText) && <ActionButtonBar // check prop HERE, only render ActionButtonBar when it's ready.
                        player = {this.props.player}
                        enemy= {this.props.enemy}
                        clickSound={(v)=>this.props.clickSound(v)}
                        passage= {this.props.passage}
                        takeItem= {(newItem, props)=> this.props.takeItem(newItem, props)} 
                        nextPassage= {(nextPassage, action)=>this.props.nextPassage(nextPassage,action)}
                        fight= {(action, props)=> this.props.fight(action, props)}/>}
                </div>
            </div>
        )
    }
}