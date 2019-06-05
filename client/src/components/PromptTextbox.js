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

    componentDidMount(){
        //console.log(this.props);
    }

    componentDidUpdate(){
        //console.log(this.props);
    }

    render(){
        if(this.props.passage){
            let currentPassage = this.props.passage.text;       
            return(
                <div style= {promptBoxStyle} >
                    <p >
                        {currentPassage}
                    </p>    
                </div>
            )
        } else {
            return(
                <div style= {promptBoxStyle} >
                    <p >
                        One Moment Please, internet is dancing.
                    </p>    
                </div>
            )
        }
    }
}