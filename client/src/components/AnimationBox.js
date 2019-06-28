import React from 'react';
import CharacterPanel from './ActionAnimation/CharacterPanels'; 
import DragonFight from '../images/dragon_fight.jpg';

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
        height: '150%',
        width: '100%',
        backgroundColor: 'rgba(255, 0, 255, 0.3)',
        backgroundImage: '',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
    
}

export default class AnimationBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Animation:'',
            position: -360,
            visible: false
        };
    }

    move(){
        if(this.state.position < 0){
          this.setState({position: "3rem"})
        }else {
          this.setState({position: -360})
        }
    }

    componentDidUpdate(prevProps){
        //console.log('AnimationBox', this.props.passage);
        console.log("AnimationBox PrevProps", prevProps);
        if(prevProps.passage && this.props.passage.isFight !== prevProps.passage.isFight ){
            this.move();
            styles.actionImage.backgroundImage = `url(${DragonFight})`;
            //styles.actionImage.backgroundSize = 'cover';
            this.setState({visible: true});
        }
        if(this.state.visible && !this.props.passage.isFight){
            this.move();
            styles.actionImage.backgroundImage = ``;
            //styles.actionImage.backgroundSize = 'cover'

            this.setState({visible: false});
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
                    character = {this.props.player}/>
                    <CharacterPanel
                    left={false}
                    position = {this.state.position}
                    move = {()=>this.move()}
                    character= {this.props.enemy} />
                </div>
                

            </div>
        )
    }
}


