import React from "react";
import image from '../images/worldMap1.png';

const mapStyle = {
    borderRadius: "50%",
    height: '250px',
    width: '250px',
    backgroundImage: `url(${image})`,
    backgroundSize: 'auto',
    backgroundPosition: 'center',
    backgroundColor: 'grey',
    border: '5px solid #9764c7',
    marginLeft: '20px',
    
}

console.log(image);
export default class WorldMap extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    };

    


    render(){
        return(
            <div id= 'map' style= {mapStyle}>
            
            </div>
        )
    }
}