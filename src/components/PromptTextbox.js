import  React from "react";


const promptBoxStyle = {
    color: 'green',
    backgroundColor: 'black',
    fontSize: '1.7rem',
    fontFamily: 'monospace',
    border: '10px solid pink',
    borderImage: 'repeating-linear-gradient( 45deg, teal, purple) 10',
    resize: 'none',
    width: '60%',
    height: '10rem',
    float: 'right',
    marginRight: '10%'
}




export default class PromptTextBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div>
                <textarea style= {promptBoxStyle}>And here our great adventurer shall get his info</textarea>
                
            </div>



        )
    }



}