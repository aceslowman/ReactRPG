import React from 'react';
import knight from '../images/knight.png';
import dwarfFace from '../images/dwarf-face.png';
import vikingHead from '../images/viking-head.png';
import witchFace from '../images/witch-face.png';
import wizardFace from '../images/wizard-face.png';
import womanElfFace from '../images/woman-elf-face.png';


const styles = {
    button: {
        fontSize: '1.5rem',
        backgroundColor: '#22eaca',
        fontFamily: 'monospace',
        margin: '0 10px 0',
        borderRadius: '3px',
        fontWeight: '550'

    },
    wrapper: {
        //backgroundColor: 'blue',
        position: 'absolute',
        padding: '15px',
        borderRadius: '5px',
        backgroundImage: 'linear-gradient( to bottom right, #f79c1d, #ffe837)'
    },
    playerImage:{
        width:'100px',
        height:'100px',
        padding:'0 50px 0'
    },
    imageContainer: {
        textAlign: 'center',
        fontFamily: 'monospace',
        fontSize: '1.5rem',
        fontWeight: 'bold'
    },
    highlightedImageContainer: {
        textAlign: 'center',
        fontFamily: 'monospace',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        backgroundColor: 'red'
    },
    boxPosition:{
        display:'flex',
        justifyContent:'center',
    },
    container:{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        padding:'15px',
    },
    text: {
        fontSize: '3rem',
        fontFamily: 'monospace',
        fontWeight: '550',
        margin: '20px, 0, 0'
    },
    input: {
        border: '5px solid #22eaca',
        padding: '15px',
        background: 'rgba(255,255,255,0.5)',
        margin: '15 0 10px 0',
        fontSize: '1rem',
        margin: '10px auto 2px'
    },
    welcome: {
        fontSize: '3rem',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        margin: '10px',
        textAlign: 'center'
    }

};

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

    highlight(e){
        e.target.style = 'highlightedImageContainer';
    }

    setName(e){
        let name = e.target.value;
        this.setState({name: name});
    }

    render(){
        return (
            <div ref={(n) => {this.wrapperRef = n}} style={{...styles.wrapper, display: this.props.modalOpen ? 'block' : 'none' }}>
                <div style={{...styles.boxPosition, ...styles.welcome}}>  
                    Welcome To <br/> 
                    {this.props.title}
                </div>
                <div style={{...styles.boxPosition}} >
                  
                   <input style= {{...styles.input}} onChange= {(e)=> this.setName(e)} type="text" placeholder="Enter Your Name"/>
                </div>
                <div style={{...styles.boxPosition, ...styles.text}}>Choose your class:</div>
                <div style={{...styles.container}} >
                    <div style= {{...styles.imageContainer}} >
                       
                        <img src={knight} onClick={(e)=>this.setImage(e)} style={{...styles.playerImage}} id= "5cf0ac3b66ecb01288967abc" alt="Knight"/>
                        <p>Knight</p>
                        
                    </div>
                    <div style= {{...styles.imageContainer}}>
                        <img src={dwarfFace} onClick={(e)=>this.setImage(e)} style={{...styles.playerImage}} id= "5cf0ace566ecb01288967abd" alt="Dwarf" />
                        <p>Dwarf</p>
                    </div>
                    <div style= {{...styles.imageContainer}}>
                        <img src={wizardFace} onClick={(e)=>this.setImage(e)} style={{...styles.playerImage}} id= "5cf0ae7866ecb01288967abe" alt="Wizard" /> 
                        <p>Wizard</p>
                    </div>
                    <div style= {{...styles.imageContainer}}>
                        <img src={witchFace} onClick={(e)=>this.setImage(e)} style={{...styles.playerImage}} id= "5cf0aefe66ecb01288967abf" alt="Witch"/>
                        <p>Witch</p>
                    </div>
                    <div style= {{...styles.imageContainer}}>
                        <img src={vikingHead} onClick={(e)=>this.setImage(e)} style={{...styles.playerImage}} id= "5cf0af7d66ecb01288967ac1" alt="Viking"/>
                        <p>Viking</p>
                    </div>
                    <div style= {{...styles.imageContainer}}>
                        <img src={womanElfFace} onClick={(e)=>this.setImage(e)} style={{...styles.playerImage}} id= "5cf0b0bd66ecb01288967ac4" alt="FemaleElf"/>
                        <p>Elf</p>
                    </div>
                </div>
                <div style={{...styles.boxPosition}}>
                    <button style= {{...styles.button}} onClick={()=>this.adventureStart()}>Begin Adventure</button>
                    <button style= {{...styles.button}} onClick={()=>this.props.onClose()}>Cancel</button>
                </div>
            </div>
        )
    }
}