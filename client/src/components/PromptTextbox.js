import  React from "react";
import MDSpinner from "react-md-spinner";

const styles = {   
    promptBoxStyle: {
        color: 'green',
        backgroundColor: 'black',
        fontSize: '1.6vw',
        fontFamily: 'monospace',
        border: '5px solid #05a19c',
        resize: 'none',
        width: '90%',
        height: '24vh',
        marginTop: '25px',
        overflowY: 'scroll',
        outline: '2px solid black'
    },
    spinnerStyle :{
        marginTop: '6%',
        marginLeft: '45%'
    }
};

export default class PromptTextBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        if(!this.props.passage || this.props.loadingText){                   
            return(
                <div style= {styles.promptBoxStyle} >
                    <MDSpinner className= 'spinner' size= {50} style= {styles.spinnerStyle}/>  
                </div>
            )
        } else {
            let currentPassage = this.props.passage.text;       
            return(
                <div style= {styles.promptBoxStyle} >
                    <p >
                        {currentPassage}
                    </p>    
                </div>
            )     
        }
    }
}


                                 