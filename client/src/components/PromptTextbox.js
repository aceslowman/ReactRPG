import  React from "react";

const promptBoxStyle = {
    color: 'green',
    backgroundColor: 'black',
    fontSize: '1.7rem',
    fontFamily: 'monospace',
    border: '10px solid pink',
    borderImage: 'repeating-linear-gradient( 45deg, #9764c7, #b824a4) 10',
    resize: 'none',
    width: '90%',
    height: '10rem',
    marginTop: '25px',
    overflowY: 'scroll'
};

export default class PromptTextBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <div style= {promptBoxStyle} >
                <p >
                    You awaken, it's cold. The fire has gone out again!<br /> You shiver and pull your blanket tight.<br />
                    Would you like to make coffee or go back to sleep?
                </p>    
            </div>
        )
    }
}