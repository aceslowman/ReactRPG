import React from 'react';

const goblinSound = '253526__nanakisan__evil-laugh-10.wav';
const trollSound = '49127__aesqe__monster-growl-01.wav';
const banditSound = '439287__dreamstobecomeEDITED__battle-laugh.wav';
const drakeSound = 'dragon-roar.wav';


export default class BattleAudio extends React.Component{
    constructor(props){
        super(props);
        this.audio='';

        this.state = {
            audiofile:''
        };
    }

    play(){
        this.audio.pause();
        this.audio.load();
        this.audio.play();
    } 

    selectAudioFile(enemy){
        
        switch (enemy) {
            case 'Bandit':
                this.setState({
                  audiofile: banditSound  
                });
                console.log('Audio', 'HIT!!');
                this.play();
                break;
            case 'Drake':
                this.setState({
                    audiofile: drakeSound
                });
                this.play();
                break;
            case 'Troll':
                this.setState({
                    audiofile: trollSound
                });
                this.play();
                break;
            case 'Goblin':
                this.setState({
                    audiofile: goblinSound
                });
                this.play();
                break;
               
            default: 
                this.setState({

                })
                break;
        }
    }    


    componentDidUpdate(prevProps){
        if(prevProps.passage && (this.props.passage.isFight && (this.props.passage.isFight !== prevProps.passage.isFight))){   
            let enemy = this.props.enemy.name;
            this.selectAudioFile(enemy);   
        }   
        if(prevProps.volume && (prevProps.volume !== this.props.volume)){
            this.audio.volume = this.props.volume;
        }
    }

    render(){
        return(
            <div style={{display: this.props.modalOpen ? 'block' : 'none' }} >

                <audio ref={(ref)=>{this.audio = ref} } autoPlay  loop={false} >
                    <source 
                    src={`audio/${this.state.audiofile}`} type="audio/wav">      
                    </source>
                </audio>
                <button onClick={()=>this.props.onClose()}>Return</button>
            </div>
        )
    }

}