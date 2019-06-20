import React from 'react';
import ActionButton from './ActionButton'

const actionButtonBarStyle = {
    //borderRadius : '4px',
    border: '2px solid #05a19c',
    outline: '2px solid black',
    backgroundImage: 'linear-gradient( to bottom right, #5d13e7, #b206b0)',
    borderStyle: '1% solid #05a19c',
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
        // if(this.props.passage){ // this shouldn't be necessary, the actionButtonBar should never render if the props.passage doesn't exist
            return(
                <div style= {actionButtonBarStyle}>               
                    {this.props.passage.actions.map((action,index)=> (
                       <ActionButton {...this.props} 
                            player = {this.props.player}
                            text= {action.text} 
                            index= {index}
                            takeItem= {(newItem)=> this.props.takeItem(newItem)} 
                            nextPassage= {(nextPassage)=>this.props.nextPassage(nextPassage)}/> 
                    ))}
                </div>
            )
        // }else{
        //     return(
        //         <div style= {actionButtonBarStyle}>               
        //             <ActionButton {...this.props} text= 'wait'/>
        //             <ActionButton {...this.props} text= 'a'/>
        //             <ActionButton {...this.props} text= 'sec'/>
        //         </div>
        //     )
        // }        
    }
}