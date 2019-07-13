import React from "react";
import image from '../images/worldmap2.png';

const mapStyle = {
    borderRadius: "5px",
    height: '25vh',
    width: '36vh',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'rgba(5, 161, 156, 0.5)',
    border: '3px solid black',
    padding: '3px 1px 3px',
    margin: '2vh 2vw 2vh' 
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