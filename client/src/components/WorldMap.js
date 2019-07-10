import React from "react";
import image from '../images/worldMap1.png';

const mapStyle = {
    borderRadius: "5px",
    height: '12rem',
    width: '80%',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(5, 161, 156, 0.5)',
    border: '3px solid black',
    padding: '3px 1px 3px',
    margin: '2rem' 
};

export default class WorldMap extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <div id= 'map' style= {mapStyle}></div>
        )
    }
}