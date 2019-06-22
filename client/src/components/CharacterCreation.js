import React from 'react';
import knight from '../images/knight.png';
import dwarfFace from '../images/dwarf-face.png';
import vikingHead from '../images/viking-head.png';
import witchFace from '../images/witch-face.png';
import wizardFace from '../images/wizard-face.png';
import womanElfFace from '../images/woman-elf-face.png';
import ClassSelectionButton from './ClassSelectionButton'

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
        fontWeight: 'bold',
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
            _id: '',
            selected: ''
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

    selectClass(img, id, type){
        this.setState({image: img});
        this.setState({type: type});
        this.setState({_id: id});
        this.setState({selected: type});
         
        console.log(this.state);
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
                        <ClassSelectionButton src= {knight} id= "5cf0ac3b66ecb01288967abc" alt= "Knight" style= {{...styles.playerImage}} selected= {this.state.selected === 'Knight' ? true : false} selectClass= {(img, id, type)=>this.selectClass(img,id,type)} />
                    </div>
                    <div style= {{...styles.imageContainer}}>                        
                        <ClassSelectionButton src={dwarfFace} id= "5cf0ace566ecb01288967abd" alt="Dwarf" style={{...styles.playerImage}} selected= {this.state.selected === 'Dwarf' ? true : false}selectClass= {(img, id, type)=>this.selectClass(img,id,type)} />
                    </div>
                    <div style= {{...styles.imageContainer}}>
                        <ClassSelectionButton src={wizardFace} id= "5cf0ae7866ecb01288967abe" alt="Wizard" style={{...styles.playerImage}}selected= {this.state.selected === 'Wizard' ? true : false}selectClass= {(img, id, type)=>this.selectClass(img,id,type)} />
                    </div>
                    <div style= {{...styles.imageContainer}}>
                        <ClassSelectionButton  src={witchFace}  id= "5cf0aefe66ecb01288967abf"  alt="Witch"  style={{...styles.playerImage}} selected= {this.state.selected === 'Witch' ? true : false} selectClass= {(img, id, type)=>this.selectClass(img,id,type)} />
                    </div>
                    <div style= {{...styles.imageContainer}}>
                        <ClassSelectionButton  src={vikingHead}  id= "5cf0af7d66ecb01288967ac1"  alt="Viking"  style={{...styles.playerImage}} selected= {this.state.selected === 'Viking' ? true : false} selectClass= {(img, id, type)=>this.selectClass(img,id,type)} />
                    </div>
                    <div style= {{...styles.imageContainer}}>
                        <ClassSelectionButton src={womanElfFace} id= "5cf0b0bd66ecb01288967ac4" alt="Elf" style={{...styles.playerImage}} selected= {this.state.selected === 'Elf' ? true : false}selectClass= {(img, id, type)=>this.selectClass(img,id,type)} />
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