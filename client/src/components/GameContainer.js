import React from 'react';
import PlayerStatBox from './PlayerStatBox.js';
import PromptTextBox from './PromptTextbox.js';
import WorldMap from './WorldMap.js';
import ActionButtonBar from './ActionButtonBar';
import AnimationBox from './AnimationBox';
import CharacterIcon from './CharacterIcon';

import CrossroadBG from './../images/crossroad.jpg';
import ForrestRoadBG from './../images/forestRoad.jpg';
import HomeInsideBG from './../images/homeInside.jpg';
import HomeOutsideBG from './../images/forestShack.jpg';
import NestBG from './../images/drakeNest.jpg';
import HomeRoadBG from './../images/roadHome.jpg';
import TownBG from './../images/town.jpg';
import TownRoadBG from './../images/roadToTown.jpg';



const styles = {
    gameContainerStyle: {
                backgroundImage: `url(${HomeInsideBG})`,
            backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        display: 'flex',
        flexDirection: 'row'
    },   
    infoDivStyle:  {
        padding: '15px',
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
        this.state = {};
    }
    componentDidMount(){
        console.log(this.props); 
    }
    componentDidUpdate(prevProps){
        if(prevProps.passage&& (this.props.passage.location !== prevProps.passage.location)){
            
            let location = this.props.passage.location;
            
            switch (location) {
                case 'HOME':
                    styles.gameContainerStyle.backgroundImage = `url(${HomeInsideBG})`;
                    break;
                case 'YARD':
                    styles.gameContainerStyle.backgroundImage = `url(${HomeOutsideBG})`;
                    break;
                case 'HOMEROAD':
                    styles.gameContainerStyle.backgroundImage = `url(${HomeRoadBG})`;
                    break;
                case 'CROSSROADS':
                    styles.gameContainerStyle.backgroundImage = `url(${CrossroadBG})`;
                    break;
                case 'FORRESTROAD':
                    styles.gameContainerStyle.backgroundImage = `url(${ForrestRoadBG})`;
                    break;
                case 'TOWN':
                    styles.gameContainerStyle.backgroundImage = `url(${TownBG})`;
                    break;
                case 'TOWNROAD':
                    styles.gameContainerStyle.backgroundImage = `url(${TownRoadBG})`;
                    break;
                case 'NEST':
                    styles.gameContainerStyle.backgroundImage = `url(${NestBG})`;
                    break;

                default: 

                    break;
            }
            this.setState({});
            console.log(this.props)
        }



    }

    

    




    render(){
        
        
        
        
        
        return(
        <div style= {{...styles.gameContainerStyle}}>
            <div style= {{...styles.infoDivStyle}}>
                <WorldMap/>
                <CharacterIcon image= {this.props.player.image}/>
                <PlayerStatBox player={this.props.player}/>
            </div>
            <div style= {{...styles.actionDivStyle}}>
                <AnimationBox
                    player = {this.props.player}
                    enemy= {this.props.enemy}
                    passage= {this.props.passage}/>
                <PromptTextBox 
                    passage= {this.props.passage}
                    loadingText= {this.props.loadingText} />
                {(this.props.passage && !this.props.loadingText) && <ActionButtonBar // check prop HERE, only render ActionButtonBar when it's ready.
                    player = {this.props.player}
                    enemy= {this.props.enemy}
                    passage= {this.props.passage}
                    takeItem= {(newItem)=> this.props.takeItem(newItem)} 
                    nextPassage= {(nextPassage, action)=>this.props.nextPassage(nextPassage,action)}
                    fight= {(action, props)=> this.props.fight(action, props)}/>}
            </div>
        </div>
        )
    }
}