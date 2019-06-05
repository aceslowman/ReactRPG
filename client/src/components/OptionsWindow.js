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
            //volume: 'num'
            //track: 'url'
        };
    }

    setTrack(e){
        
    }


    render(){
        return(
            <div style={{...styles.wrapper, display: this.props.modalOpen ? 'block' : 'none' }} >
                <h1>Options</h1>
            </div>

        )
    }

}