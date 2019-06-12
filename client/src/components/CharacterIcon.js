import React from 'react';

const characterIconStyle = {
    borderRadius: "5%",
    height: '125px',
    width: '125px',
    //backgroundImage: `url(${image})`,
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
            <div style= {{...characterIconStyle, backgroundImage: `url(${this.props.image})`}}></div>
        )
    }
}