import React from 'react';
import {Link} from "react-router-dom";
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
        //padding:'100px',
        //bottom: '0',
        //right: '0',
        margin: '100px',
        boxSizing: 'border-box'
    },
    playerImage:{
        //justifyContent:'',
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
        padding:'12px'
    }
}

export default class CharacterCreation extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            image: '',
            name: ''
        };
    }
    adventureStart(){
        if(!this.state.image) alert("image selection required");       
        if(!this.state.name) alert("Please enter name");

        if(!this.state.image || !this.state.name){
            alert("You need to select an image and provide a name!");
        }else{
            this.props.gameStarted(this.state);
        }
    }

    setImage(e){
        let img = e.target.src;
        this.setState({image:img});
        console.log(this.state)
    }

    setName(e){
        let name = e.target.value;
        this.setState({name: name});
    }



    render(){
        return (
            <div style={{...styles.wrapper, display: this.props.modalOpen ? 'block' : 'none' }}>
                <div style={{...styles.boxPosition}} >
                    <input onChange= {(e)=> this.setName(e)} type="text" placeholder="Enter Your Name"/>
                </div>
                <div style={{...styles.container}} >
                    <div>
                        <img src={knight} onClick={(e)=>this.setImage(e)} style={{...styles.playerImage}}  alt="Knight"/>
                    </div>
                    <div>
                        <img src={dwarfFace} onClick={(e)=>this.setImage(e)} style={{...styles.playerImage}} alt="dwarf" />
                    </div>
                    <div>
                        <img src={wizardFace} onClick={(e)=>this.setImage(e)} style={{...styles.playerImage}} alt="wizard" />
                    </div>
                    <div>
                        <img src={witchFace} onClick={(e)=>this.setImage(e)} style={{...styles.playerImage}} alt="witch"/>
                    </div>
                    <div>
                        <img src={vikingHead} onClick={(e)=>this.setImage(e)} style={{...styles.playerImage}} alt="viking"/>
                    </div>
                    <div>
                        <img src={womanElfFace} onClick={(e)=>this.setImage(e)} style={{...styles.playerImage}} alt="femaleElf"/>
                    </div>
                </div>
                <div style={{...styles.boxPosition}}>
                    <button onClick={()=>this.adventureStart()}>adventureStart</button>
                    <button onClick={()=>this.props.onClose()}>Cancel</button>
                </div>
            </div>
        )
    }
}