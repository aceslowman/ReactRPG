import React from 'react';
import HealthBar from './HealthBar';
//import AttackPower from './AttackPower';


const styles ={
  wrapper:{
    display:'block',
    backgroundColor:'rgba(76, 175, 150, 0)',
    height:'80%',
    width:'100%',
    marginTop: "1%",
    textAlign: 'center' 
  },
  slider:{
    position:'relative',
    transition:'all 5s ease-in-out',
    backgroundColor:'green',
    boxShadow:'2px 2px',
    padding:'25px',
    width:'150px',
    opacity: '1.5'     
  }
};

export default class Animation extends React.Component{
    constructor(props){
        super(props);

        this.state={
          animationStarted: false,
          position: props.position
        };
    }

    StartSliderAnimation(){
      console.log("start function");
        this.setState({
            animationStarted: true
        });
    }
  
  render(){
    //console.log(this.props);
    let pos = this.props.left ? {left: this.props.position} : {right : this.props.position};

    return(
      <div style={{...styles.wrapper}} >
        <div style={{...styles.slider, ...pos}}>
          <div>{this.props.character.name}</div>
          <HealthBar progress={(this.props.character.HP/this.props.character.MAXHP)*100} character={this.props.character}/>
          {/* <AttackPower character={this.props.character}/> */}
          <div>AP: {this.props.character.AP}</div>

        </div>
      </div>
    );
  }
}