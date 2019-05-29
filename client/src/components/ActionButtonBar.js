import React from 'react';
import ActionButton from './ActionButton'

const actionButtonBarStyle = {
    borderRadius : '4px',
    backgroundColor: '#B00B55',
    borderStyle: 'solid',
    fontFamily: 'monospace',
    height: '30px',
    width: '90%',
    display: 'flex',
    flexWrap: 'wrap',
    float: 'right',
    justifyContent: 'space-evenly',
    marginTop: '10px',
    padding: '10px',
    alignContent: 'center'
};

export default class ActionButtonBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            action1: "Run",
            action2: "Flee",
            action3: "Pour a cup"
        };
    }
    render(){
        return(
            <div style= {actionButtonBarStyle}>               
                <ActionButton text= {this.state.action1}/>
                <ActionButton text= {this.state.action2}/>
                <ActionButton text= {this.state.action3}/>
            </div>
        )
    }
}