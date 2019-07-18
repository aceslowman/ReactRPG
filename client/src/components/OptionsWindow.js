import React from 'react';
import BackgroundImage from './BackgroundImage';

const styles ={
    wrapper:{
        zIndex:'1000',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        padding:'15px',
        backgroundColor:'green',
        position: 'absolute',
        borderRadius:'10px',
        width:"350px",
        height:"450px",
        boxShadow:'5px 7px',
        fontFamily:'monospace',
        backgroundImage:'linear-gradient(to bottom right, #009975 , #94fc13)'       
    },
    Sliders:{
        display:'flex',
        justifyContent:'center',
        flexDirection:'column'
    },
    button:{
        height:'35px',
        width:'150px',
        borderRadius:'15px',
        marginTop:'35px',
        margin:'20px',
        fontSize:'larger'
    },
    H1:{
        fontStyle:'oblique',
        textAlign: 'center',
        width:'75%',
        borderRadius:'20px',
        backgroundImage:'linear-gradient( #5bd1d7 , #348498 ) '
    }
};

export default class OptionsWindow extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            //volume: ''
            //track: ''
        };
    }

    render(){
        return(
            <div style={{...styles.wrapper, display: this.props.modalOpen ? 'flex' : 'none' }} >
                <h1 style={{...styles.H1}}>Volume</h1>
                <h2>Encounter</h2>
                <input style={{...styles.Sliders}}
                    type="range" min="0" max="1" step= {0.01} value= {this.state.volume} 
                    onChange={(e)=>this.props.updateAudio('battle','volume',e.target.value)}
                />
                <h2>SFX</h2>
               <input style={{...styles.Sliders}}
                    type="range" min="0" max="1" step= {0.01} value= {this.state.volume} 
                    onChange={(e)=>this.props.updateAudio('action','volume',e.target.value)}
                />

                <h2>Music</h2>
                <input style={{...styles.Sliders}}
                    type="range" min="0" max="1" step= {0.01} value= {this.state.volume} 
                    onChange={(e)=>this.props.updateAudio('bg','volume',e.target.value)}
                />
                <button style={{...styles.button}} onClick={()=>this.props.toggleOptions()}><strong>Return</strong></button>
                
                
            </div>

           
        )
    }

}