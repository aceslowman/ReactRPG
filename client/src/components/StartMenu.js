import React from 'react';
import CharacterCreation from './CharacterCreation';
import OptionsWindow from './OptionsWindow';

const styles = {
    boxPostions: {
        margin:'5%',
        boxShadow: '5px 10px'
    },
    container: {
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        borderRadius:'15px'
    },
    startPage:{
        width:'100%',
        height:'100%'

    }
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

    cancelOptionsWindows(){
        this.setState({
            openOptionsWindow: false
        });
    }

    render(){
        return (
            <div style={{...styles.startPage}} >
                <div style={{...styles.container}}>
                    <h1>Game Title</h1>
                    <div style={{...styles.boxPostions}} >
                        <button onClick={()=>this.startCharacterCreation()}>New Game</button>
                    </div>
                    <div style={{...styles.boxPostions}} >
                        <button onClick={()=>this.showOptions()}>Options</button> 
                    </div>
                    <div style={{...styles.boxPostions}} >
                        <button onClick={()=>this.continueGame()}>Continue or Load</button>
                    </div>
                </div>
                <CharacterCreation {...this.props} modalOpen={this.state.openCharacterCreate} onClose={()=>this.cancelCharacterCreation()} />
                <OptionsWindow modalOpen={this.state.openOptionsWindow} />
            </div>
        )
    }
}