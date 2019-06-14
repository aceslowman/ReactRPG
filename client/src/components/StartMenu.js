import React from 'react';
import CharacterCreation from './CharacterCreation';
import OptionsWindow from './OptionsWindow';

const styles = {
    startPage: {
        /* 
            for elements to properly center on the screen,
            you have to make sure that all containing divs
            have a width defined, and if that width is 100%,
            then THAT element's parent width/height should
            be defined.
        */
        width: '100%',
        height: '100%',
        backgroundColor: 'blue',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        // width and height can be defined as well
        padding: '15px',
        display:'flex',
        alignItems:'center',
        justifyContent: 'center',
        flexDirection:'column',
        borderRadius:'15px',
        backgroundColor: 'green'
    },
    buttonPositions: {
        margin: '15px', // this gives us space between the buttons
        boxShadow: '5px 10px',
        backgroundColor: 'red'
    },
};

export default class StartMenu extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            openCharacterCreate: false,
            openOptionsWindow: false
        }
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

    showOptions() {
        console.log("show options", this.state)
        this.setState({
            openOptionsWindow: true 
        });
    }

    closeOptionsWindow(){
        this.setState({
            openOptionsWindow: false
        });
    }

    render(){
        return (
            <div style={{...styles.startPage}} >
                <div style={{...styles.container}}>
                    <h1>Game Title</h1>
                    <div style={{...styles.buttonPositions}} >
                        <button onClick={()=>this.startCharacterCreation()}>New Game</button>
                    </div>
                    <div style={{...styles.buttonPositions}} >
                        <button onClick={()=>this.showOptions()}>Options</button> 
                    </div>
                    <div style={{...styles.buttonPositions}} >
                        <button onClick={()=>this.continueGame()}>Continue or Load</button>
                    </div>
                </div>
                <CharacterCreation {...this.props} modalOpen={this.state.openCharacterCreate} onClose={()=>this.cancelCharacterCreation()} />
                <OptionsWindow modalOpen={this.state.openOptionsWindow} onClose={()=>this.closeOptionsWindow()} />
            </div>
        )
    }
}