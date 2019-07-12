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
        backgroundColor: 'rgba(0, 0, 0, 0)',
        display: 'flex',
        justifyContent: "center",
        //overflow: 'hidden',
        flexDirection: 'column'   
    },
    Wrapper:{
        textAlign: 'center',
        backgroundColor: 'rgba(0, 255, 255, 0)',
        width:'100%',
        height:'100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        position:'relative',
    },
    actionImage:{
        height: '150%',
        width: '100%',
        backgroundColor: 'rgba(255, 0, 255, 0)',
        backgroundImage: '',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'all 0.5 ease-out'
    }
    
}

export default class AnimationBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            animation:'',
            position: 101,
            active: false
        };
    }

    move = () => {
        if(this.state.active){
            this.setState({animation:'AnimationSlideOut', active: false})
            //this.setState({position: '101%', active: false})
        }else{
            this.setState({animation:'AnimationSlideIn', active: true})
            //this.setState({position: '0px', active: true})
        }
    }



    componentDidUpdate(prevProps){
        //console.log('AnimationBox', this.props.passage);
        //console.log("AnimationBox PrevProps", prevProps);
        if(prevProps.passage && this.props.passage.isFight !== prevProps.passage.isFight ){
            setTimeout(() =>{
                this.move();
                styles.actionImage.backgroundImage = `url(${DragonFight})`;
                //styles.actionImage.backgroundSize = 'cover';
                this.setState({visible: true});
            } , 1000);
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
                <button onClick={() => this.move()}>CLICK ME</button> 
                <div style= {{...styles.actionImage}}></div>
                {/* <div style={{...styles.Wrapper}}> */}
                <React.Fragment>
                    {/* <button onClick={() => this.move()}>CLICK ME</button> */}
                    {/* <div style={{ ...styles.animationBoxStyle }}> */}
                        <div style={{ ...styles.Wrapper }}>
                            <CharacterPanel
                                animationClass={this.state.animation}
                                left={true}
                                position={this.state.position}
                                move={() => this.move()}
                                character={this.props.player}
                            />
                            <CharacterPanel
                                animationClass={this.state.animation}
                                left={false}
                                position={this.state.position}
                                move={() => this.move()} 
                                character={this.props.enemy}
                            />
                        
                        </div>
                    {/* </div> */}
                </React.Fragment>
            {/* </div> */}
            </div>    
        )
    }
}

