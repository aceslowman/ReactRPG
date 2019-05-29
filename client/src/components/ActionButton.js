import React from 'react';

const actionButtonStyle= {
    fontSize: "18px",
    borderRadius: "5px",
    width: '25%',
    height: '100%',
    color: 'green',
    backgroundColor: 'black'
}

export default class ActionButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <input style={actionButtonStyle} type= 'button' value = {this.props.text}></input>
        )
    }
}