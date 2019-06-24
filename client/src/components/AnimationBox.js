import React from 'react';
import CharacterPanel from './ActionAnimation/CharacterPanels'; 

//blank box in game container atm
const styles = {
    animationBoxStyle: {
        border: '1px',
        borderRadius: '20px',
        height: '60%',
        width: '90%',
        background: 'rgba(0, 0, 0, 0.3)',
        display: 'flex',
        justifyContent: "center",
        overflow: 'hidden',
        flexDirection: 'column'
          
    },
    Wrapper:{
        textAlign: 'center',
        backgroundColor: 'rgba(0, 255, 255, 0.3)',
        width:'100%',
        height:'100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    actionImage:{
        height: '125%',
        width: '100%',
        backgroundColor: 'rgba(255, 0, 255, 0.3)'
    }
    
}

export default class AnimationBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Animation:'',
            position: -360
        };
    }

    move = () => {
        // let {PositionLeft} = this.state;
        // PositionLeft+= window.innerWidth / 2;
        // this.setState({
        //   PositionLeft
        // })
        if(this.state.position < 0){
          this.setState({position: "3rem"})
        }else {
          this.setState({position: -360})
        }
      }


    render(){
        return(
            <div style= {{...styles.animationBoxStyle}}>
                <div style= {{...styles.actionImage}}>
                    <button onClick ={()=>this.move()}>CLICK ME</button>
                </div>
                <div style={{...styles.Wrapper}}>
                    
                    <CharacterPanel  
                    left={true}
                    position = {this.state.position}
                    move = {()=>this.move()} 
                    character = {{ name : "JIL", MAXHP:100 , HP:100, AP:30}}/>
                    <CharacterPanel
                    left={false}
                    position = {this.state.position}
                    move = {()=>this.move()}
                    character= {{name :"Drake", MAXHP:100, HP:50 , AP:25}} />
                </div>
                

            </div>
        )
    }
}