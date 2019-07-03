import React from 'react';
import {CSSTransition} from 'react-transition-group';
import './Background.css';

import CrossroadBG from './../images/crossroad.jpg';
import ForrestRoadBG from './../images/forestRoad.jpg';
import HomeInsideBG from './../images/homeInside.jpg';
import HomeOutsideBG from './../images/forestShack.jpg';
import NestBG from './../images/drakeNest.jpg';
import HomeRoadBG from './../images/roadHome.jpg';
import TownBG from './../images/town.jpg';
import TownRoadBG from './../images/roadToTown.jpg';

export default class BackgroundImage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentImage: HomeInsideBG,
            newImage: false
        };
    }
 
    componentDidUpdate(prevProps, prevState){
         
        if(prevProps.passage && (this.props.passage.location !== prevProps.passage.location)){
            
            let location = this.props.passage.location;
            
            switch (location) {
                case 'HOME':
                    this.setState({
                        currentImage: HomeInsideBG,
                        newImage: true
                    });
                    break;
                case 'YARD':
                    this.setState({
                        currentImage: HomeOutsideBG,
                        newImage: true
                    });
                    break;
                case 'HOMEROAD':
                    this.setState({
                        currentImage: HomeRoadBG,
                        newImage: true
                    });
                    break;
                case 'CROSSROADS':
                    this.setState({
                        currentImage: CrossroadBG,
                        newImage: true
                    });
                    break;
                case 'FORRESTROAD':
                    this.setState({
                        currentImage: ForrestRoadBG,
                        newImage: true
                    });
                    break;
                case 'TOWN':
                    this.setState({
                        currentImage: TownBG,
                        newImage: true
                    });
                    break;
                case 'TOWNROAD':
                    this.setState({
                        currentImage: TownRoadBG,
                        newImage: true
                    });
                    break;
                case 'NEST':
                    this.setState({
                        currentImage: NestBG,
                        newImage: true
                    });
                    break;
                default: 

                    break;
            }            
        }
    }

    setNewImage(bool){
        this.setState({newImage:bool});
    }

    render(){
        return(   
            <CSSTransition
                in= {this.state.newImage}
                appear= 'true'
                classNames= 'background'
                timeout= {700} 
                onEntered= {() => this.setNewImage(false)} 
               > 
              <React.Fragment>
                    <img 
                        className='imageStyle' 
                        src= {this.state.currentImage} 
                        alt= 'Current Background'
                        >  
                    </img>          
                </React.Fragment>  
            </CSSTransition> 
        )
    }
}