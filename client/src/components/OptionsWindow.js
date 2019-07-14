import React from 'react';

const styles ={
    wrapper:{
        backgroundColor:'green',
        position: 'absolute',
        top: '0',
        left: '0',
        width:"100%",
        height:"100%",
        display:'block'
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
            <React.Fragment>
            <div style={{...styles.wrapper, display: this.props.modalOpen ? 'block' : 'none' }} >
            <button onClick={()=>this.props.onClose()}>Return</button>
                <h1>Options</h1>
                <input type="range" min="0" max="1" step= {0.01} value= {this.state.volume} 
                    onChange={(e)=>this.props.updateAudio('volume',e.target.value)}
                />
                <select onChange={(e)=>this.props.updateAudio('audiofile',e.target.value)} >
                    <option value='audio/473749__klankbeeld__estate-manteling-short-02-nl-190527-0008.wav'>forrest</option>
                    <option value='audio/473996__esistnichtsoernst__space-arp-f-chords.wav'>startMenu</option>
                    <option value='audio/250856__joshuaempyre__epic-orchestra-loop.wav'>Battle</option>
                    <option value='456058__inchadney__fireplace.wav'>fireplace</option>
                
                </select>
                <div>
            <input type="range" min="0" max="1" step= {0.01} value= {this.state.volume} 
                    onChange={(e)=>this.props.updateAudio('volume',e.target.value)}
                />
            </div>
            </div>

            </React.Fragment>
        )
    }

}