import React from 'react';

export default class Button extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            
        }
    }


    render(){
        return(
            <input type = 'button' value = {this.props.text}></input>
        )
    }
}