import React from 'react';
import CharacterPanel from './ActionAnimation/CharacterPanels'; 
import DragonFight from '../images/dragon_fight.png';
import GoblinFight from '../images/goblin.png';
import TrollFight from '../images/troll.png';
import BanditFight from '../images/bandits.png';


const styles = {
    animationBoxStyle: {
        border: '1px',
        borderRadius: '20px',
        height: '60%',
        width: '90%',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        display: 'flex',
        justifyContent: "center",
        overflow: 'hidden',
        flexDirection: 'column'   
    },
    Wrapper:{
        textAlign: 'center',
        backgroundColor: 'rgba(255, 0, 0, 0)',
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
        backgroundColor: 'rgba(233, 47, 100, 0)',
        backgroundImage: '',
        backgroundSize: '100% 100%',
        backgroundBlendMode: 'lighten',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'all 0.5 ease-out',
        borderRadius: '3px'
    } 
};

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
        }else{
            this.setState({animation:'AnimationSlideIn', active: true})
        }
    }

    attack = () => {
        let c = 'AttackAnimation' + (this.props.fightTurn ? '1' : ''); 
        console.log(c);
        this.setState({animation: c });
    }

    componentDidUpdate(prevProps){
        if(prevProps.passage && this.props.passage.isFight !== prevProps.passage.isFight ){
            setTimeout(() =>{
                this.move();
                let enemyName = this.props.enemy.name;
                styles.actionImage.backgroundColor = 'rgba(233, 47, 100, .3)';
                switch(enemyName){
                    case 'Drake' :
                            styles.actionImage.backgroundImage = `url(${DragonFight})`;
                    break;

                    case 'Bandit' :
                            styles.actionImage.backgroundImage = `url(${BanditFight})`;
                    break;

                    case 'Troll' :
                            styles.actionImage.backgroundImage = `url(${TrollFight})`;
                    break;

                    case 'Goblin' :
                            styles.actionImage.backgroundImage = `url(${GoblinFight})`;
                    break;
                    default : 
                    break;
                }              
                this.setState({visible: true});
            } , 1000);
        }
        if(this.state.visible && !this.props.passage.isFight){
            this.move();
            styles.actionImage.backgroundImage = ``;
            styles.actionImage.backgroundColor = 'rgba(233, 47, 100, 0)';
            this.setState({visible: false});
        }
        if(this.state.visible && this.props.fightTurn !== prevProps.fightTurn){
            console.log('AnimationBox: ', 'trigger jiggle');
            this.attack();

        }
    }

    render(){
 
        return(
            <div style= {{...styles.animationBoxStyle}}>
                {/* <button onClick={() => this.attack()}>CLICK ME</button>  */}
                <div style= {{...styles.actionImage}}></div>
                <React.Fragment>
                    <div style={{ ...styles.Wrapper }}>
                        <CharacterPanel
                            animationClass={this.state.animation}
                            left={true}
                            position={this.state.position}
                            move={() => this.move()}
                            attack= {() => this.attack()}
                            character={this.props.player}
                        />
                        <CharacterPanel
                            animationClass={this.state.animation}
                            left={false}
                            position={this.state.position}
                            move={() => this.move()} 
                            attack={() => this.attack()}
                            character={this.props.enemy}
                        />
                    </div>
                </React.Fragment>
          
            </div>    
        )
    }
}