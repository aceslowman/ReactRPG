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
        };
    }

    render(){
        if(this.props.passage){
            return(
                <div style= {actionButtonBarStyle}>               
                    {this.props.passage.actions.map((action,index)=> (
                       <ActionButton {...this.props} text= {action.text} index= {index} nextPassage= {(nextPassage)=>this.props.nextPassage(nextPassage)}/> 
                    ))}
                </div>
            )}else{
                return(
                    <div style= {actionButtonBarStyle}>               
                        <ActionButton {...this.props} text= 'wait'/>
                        <ActionButton {...this.props} text= 'a'/>
                        <ActionButton {...this.props} text= 'sec'/>
                    </div>
                )
            }        
    }
}