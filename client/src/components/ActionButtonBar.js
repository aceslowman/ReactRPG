import React from 'react';
import ActionButton from './ActionButton'

const actionButtonBarStyle = {
    border: '2px solid #05a19c',
    outline: '2px solid black',
    backgroundImage: 'linear-gradient( to bottom right, #5d13e7, #b206b0)',
    borderStyle: '1% solid #05a19c',
    fontFamily: 'monospace',
    height: '5vh',
    width: '90%',
    display: 'flex',
    flexWrap: 'wrap',
    float: 'right',
    justifyContent: 'space-evenly',
    marginTop: '15px',
    padding: '1vh 0 1vh',
    alignContent: 'center'
};

export default class ActionButtonBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {       
        };
    }

    render(){
        return(
            <div style= {actionButtonBarStyle}>               
                {this.props.passage.actions.map((action,index)=> (
                     <ActionButton {...this.props} 
                            player = {this.props.player}
                            enemy= {this.props.enemy}
                            text= {action.text}
                            class= {action.class} 
                            index= {index}
                            takeItem= {(newItem, props)=> this.props.takeItem(newItem, props)} 
                            nextPassage= {(nextPassage, action)=>this.props.nextPassage(nextPassage,action)}
                            fight= {(action, props)=> this.props.fight(action, props)}
                            key = {action.text}/> 
                    ))
                }
            </div>
        )
    }
}