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
                    <ActionButton {...this.props} text= {this.props.passage.actions[0].text} index= {0} nextPassage= {(nextPassage)=>this.props.nextPassage(nextPassage)}/>
                    <ActionButton {...this.props} text= {this.props.passage.actions[1].text} index= {1} nextPassage= {(nextPassage)=>this.props.nextPassage(nextPassage)}/>
                    <ActionButton {...this.props} text= {this.props.passage.actions[2].text} index= {2} nextPassage= {(nextPassage)=>this.props.nextPassage(nextPassage)}/>
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