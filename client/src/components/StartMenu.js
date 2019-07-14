import React from 'react';
import CharacterCreation from './CharacterCreation';
import OptionsWindow from './OptionsWindow';
import Titles from './../titles.js';

const styles = {
    startPage: {
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient( to bottom right, #113f67,#34699a)',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',   
    },
    container: {
        padding: '15px',
        display:'flex',
        alignItems:'center',
        justifyContent: 'center',
        flexDirection:'column',
        borderRadius:'15px',
        backgroundImage: 'radial-gradient(circle farthest-side at 85% 40%, #421b9b 1%, #a06ee1, #389168 20%, #fb3569 35%, #831212)'
    },
    buttonPositions: {
        margin: '1.5vh', 
        boxShadow: '5px 7px',
        backgroundColor: 'red',
        borderRadius: '3px'      
    },
    buttonStyle: {
        fontFamily: 'monospace',
        fontSize: '3vw',
        backgroundColor: '#22eaca',
        borderRadius: '3px',
        color: 'black'
    },
    titleStyle: {
        fontFamily: 'courier',
        fontSize: '4.5vw',
        fontWeight: '900',
        fontStyle: 'italic',
        color: '#dbff3d',
        textShadow: '2px 2px #113f67'
    }
};

export default class StartMenu extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            openCharacterCreate: false,
        };
    }

    componentDidMount(){
        let newTitle= Titles[Math.floor(Math.random()*99)+1];
        this.setState({title: newTitle});
    }

    startCharacterCreation() {
        console.log('GAME STARTED', this.state);
        this.setState({
            openCharacterCreate: true
        });
    }
    cancelCharacterCreation(){
        this.setState({
            openCharacterCreate: false
        });
    }



    render(){
        return (
            <div style={{...styles.startPage}} >
                <div style={{...styles.container}}>
                    <h1 style= {{...styles.titleStyle}}>{this.state.title}</h1>
                    <div style={{...styles.buttonPositions}} >
                        <button style= {{...styles.buttonStyle}} onClick={()=>this.startCharacterCreation()}>New Game</button>
                    </div>
                    <div style={{...styles.buttonPositions}} >
                        <button style= {{...styles.buttonStyle}} onClick={()=>this.props.toggleOptions()}>Options</button> 
                    </div>
                    {/* <div style={{...styles.buttonPositions}} >
                        <button style= {{...styles.buttonStyle}} onClick={()=>this.continueGame()}>Continue or Load</button>
                    </div> */}
                </div>
                <CharacterCreation {...this.props} modalOpen={this.state.openCharacterCreate} onClose={()=>this.cancelCharacterCreation()} />
               
            </div>
        )
    }
}