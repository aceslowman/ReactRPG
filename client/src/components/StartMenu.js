import React from 'react';
import Button from './Button';

export default class StartMenu extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    startNewGame() {

    }

    showOptions() {

    }

    render(){
        return (
            <div>            
                <h1>Game Title</h1>
                <ul>
                    <li> <Button text='New Game' onClick= {this.startNewGame} ></Button> </li>
                    <li> <Button text ='Options' onClick={this.showOptions}></Button> </li>
                    <li> <Button text = 'Continue or Load'></Button></li>
                </ul>
            </div>

        )
    }
}