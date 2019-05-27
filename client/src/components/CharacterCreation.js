import React from 'react';
import knight from '../images/knight.png';
import dwarfFace from '../images/dwarf-face.png';
import vikingHead from '../images/viking-head.png';
import witchFace from '../images/witch-face.png';
import wizardFace from '../images/wizard-face.png';
import womanElfFace from '../images/woman-elf-face.png';

const styles = {
    wrapper: {
        backgroundColor: 'yellow',
        position: 'absolute',
        top: '0',
        left: '0',
        //bottom: '0',
        //right: '0',
        margin: '100px',
        boxSizing: 'border-box'
    },
    playerImage:{
        width:'100px',
        height:'100px',
        padding:'50px'
    },
    boxPosition:{
        display:'flex',
        justifyContent:'center'
    },
    container:{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        padding:'10px'
    }
}

export default class CharacterCreation extends React.Component{
    constructor(props){
        super(props);

        this.state = {}
    }
    adventureStart(){


    }

    render(){
        return (
            <div style={{...styles.wrapper, display: this.props.modalOpen ? 'block' : 'none' }}>
                <div style={{...styles.boxPosition}} >
                    <input type="text" placeholder="Enter Your Name" />
                </div>
                <div style={{...styles.container}} >
                    <div>
                        <img src={knight} style={{...styles.playerImage}} alt="Player Select Option #1"/>
                    </div>
                    <div>
                        <img src={dwarfFace} style={{...styles.playerImage}} alt="Player Select Option #1" />
                    </div>
                    <div>
                        <img src={wizardFace} style={{...styles.playerImage}} alt="Player Select Option #1" />
                    </div>
                    <div>
                        <img src={witchFace} style={{...styles.playerImage}} alt="Player Select Option #1" />
                    </div>
                    <div>
                        <img src={vikingHead} style={{...styles.playerImage}} alt="Player Select Option #1" />
                    </div>
                    <div>
                        <img src={womanElfFace} style={{...styles.playerImage}} alt="Player Select Option #1" />
                    </div>
                </div>
                <div style={{...styles.boxPosition}}>
                    <button onClick={()=>this.adventureStart()}>Start Adventure</button>
                    <button onClick={()=>this.props.onClose()}>Cancel</button>
                </div>
            </div>
        )
    }
}