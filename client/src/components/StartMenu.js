import React from 'react';
import CharacterCreation from './CharacterCreation';

const styles = {
    startPage: {
        width: '100%',
        height: '100%',
        backgroundColor: 'blue'
    },
    container: {
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        borderRadius:'15px',
        backgroundColor: 'green'
    },
    buttonPositions: {
        // margin:'5%',
        // margin: '15px',
        boxShadow: '5px 10px',
        backgroundColor: 'red'
    },
};

export default class StartMenu extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            openCharacterCreate: false
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
                <CharacterCreation modalOpen={this.state.openCharacterCreate} onClose={()=>this.cancelCharacterCreation()}/>
            </div>
        )
    }
}