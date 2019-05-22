import React from 'react';

export default class CharacterCreation extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name:"",
            image:null

        }
    }
    render(){
        return (
            <label>Character Name:</label>
            <input id='playername'  ></input>
            
        )
    }
}