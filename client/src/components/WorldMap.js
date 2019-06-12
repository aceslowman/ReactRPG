import React from "react";
import image from '../images/worldMap1.png';

const mapStyle = {
    borderRadius: "5px",
    height: '200px',
    width: '80%',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'purple',
    border: '5px solid #9764c7',   
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