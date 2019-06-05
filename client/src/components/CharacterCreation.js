import React from 'react';
import knight from '../images/knight.png';
import dwarfFace from '../images/dwarf-face.png';
import vikingHead from '../images/viking-head.png';
import witchFace from '../images/witch-face.png';
import wizardFace from '../images/wizard-face.png';
import womanElfFace from '../images/woman-elf-face.png';
import { relative } from 'path';

const styles = {
    wrapper: {
        backgroundColor: 'yellow',
        position: 'absolute',
        padding: '15px'
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
        padding:'15px'
    }
}

export default class CharacterCreation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            image: '',
            name: '',
            _id: ''
        };
    }

    componentDidMount() {
        document.addEventListener('mousedown', (e)=>this.handleClickOut(e));
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', (e)=>this.handleClickOut(e));
    }

    handleClickOut(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target) && this.props.modalOpen) {
            this.props.onClose();
        }
    }

    adventureStart(){
        if(!this.state.image || !this.state.name){
            alert("You need to select an image and provide a name!");
        }else{
            this.props.gameStarted(this.state);
        }
    }

    setImage(e){
        let img = e.target.src;
        let type = e.target.alt;
        let id = e.target.id;
        this.setState({image: img});
        this.setState({type: type});
        this.setState({_id: id});
        console.log(this.state);
    }

    setName(e){
        let name = e.target.value;
        this.setState({name: name});
    }

    render(){
        return (
            <div ref={(n) => {this.wrapperRef = n}} style={{...styles.wrapper, display: this.props.modalOpen ? 'block' : 'none' }}>
                <div style={{...styles.boxPosition}} >
                    <input onChange= {(e)=> this.setName(e)} type="text" placeholder="Enter Your Name"/>
                </div>
                <div style={{...styles.container}} >
                    <div>
                        <img src={knight} onClick={(e)=>this.setImage(e)} style={{...styles.playerImage}} id= "5cf0ac3b66ecb01288967abc" alt="Knight"/>
                    </div>
                    <div>
                        <img src={dwarfFace} onClick={(e)=>this.setImage(e)} style={{...styles.playerImage}} id= "5cf0ace566ecb01288967abd" alt="Dwarf" />
                    </div>
                    <div>
                        <img src={wizardFace} onClick={(e)=>this.setImage(e)} style={{...styles.playerImage}} id= "5cf0ae7866ecb01288967abe" alt="Wizard" />
                    </div>
                    <div>
                        <img src={witchFace} onClick={(e)=>this.setImage(e)} style={{...styles.playerImage}} id= "5cf0aefe66ecb01288967abf" alt="Witch"/>
                    </div>
                    <div>
                        <img src={vikingHead} onClick={(e)=>this.setImage(e)} style={{...styles.playerImage}} id= "5cf0af7d66ecb01288967ac1" alt="Viking"/>
                    </div>
                    <div>
                        <img src={womanElfFace} onClick={(e)=>this.setImage(e)} style={{...styles.playerImage}} id= "5cf0b0bd66ecb01288967ac4" alt="FemaleElf"/>
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