import React from 'react';
import HealthBar from './HealthBar';


export default class Animation extends React.Component{
    constructor(props){
        super(props);

        this.state={
          animationStarted: false,
          position: props.position,
          attacked:false
        };
    }

    StartSliderAnimation(){
      console.log("start function");
        this.setState({
            animationStarted: true
        });
    }
  
  render(){
    let pos = this.props.left ? {right: `${this.props.position - 58}%` } : {left: `${this.props.position}%`};

    return(
      <div className = 'AnimationWrapper'>
        <div className = {this.props.animationClass + (this.props.left ? 'Left' : 'Right') + ' AnimationSlider'} style={pos}>
          <div>{this.props.character.name}</div> {"\n"}
          <HealthBar progress={(this.props.character.HP/this.props.character.MAXHP)*100} character={this.props.character}/>
          {/* <AttackPower character={this.props.character}/> */}
          <div>AP: {this.props.character.AP}</div>

        </div>
      </div>
    );
  }
}
