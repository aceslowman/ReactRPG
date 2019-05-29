import React from 'react';
import image from '../images/wizard-face.png'

const characterIconStyle = {
    borderRadius: "5%",
    height: '150px',
    width: '150px',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: '#05a19c',
    border: '2px solid #000000',
};

export default class CharacterIcon extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <div style= {characterIconStyle}></div>
        )
    }
}