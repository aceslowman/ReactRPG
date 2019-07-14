import React from 'react';

const characterIconStyle = {
    borderRadius: "5%",
    height: '7vw',
    width: '7vw',
    backgroundSize: '100%',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(5, 161, 156, 1)',
    border: '2px solid #000000',
    marginBottom: '2vh'
};

export default class CharacterIcon extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <div style= {{...characterIconStyle, backgroundImage: `url(${this.props.image})`}}></div>
        )
    }
}