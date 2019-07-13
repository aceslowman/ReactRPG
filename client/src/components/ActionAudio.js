import React from 'react';

const takeSound = 'pickup.wav';
const lootSound = 'dwoboyle__coins-01.wav';
const fightSound = '319590__hybrid-v__shield-bash-impact.wav';
const getQuest ='270404__littlerobotsoundfactory__jingle-achievement-00.wav';


export default class ActionAudio extends React.Component{
    constructor(props){
        super(props);
        this.audio='';

        this.state = {
            audiofile:'',
        };
    }

    play(){
        this.audio.pause();
        this.audio.load();
        this.audio.play();
    } 

    selectAudioFile(action){
        
        switch (action) {
            case 'TAKE':
                this.setState({
                  audiofile: takeSound  
                });
                console.log('Audio', 'HIT!!');
                this.play();
                break;
            case 'LOOT':
                this.setState({
                    audiofile: lootSound
                });
                this.play();
                break;
                
            case 'GETQUEST':
                this.setState({
                    audiofile: getQuest
                });
                this.play();
                break;         
                
            case 'FIGHT':
                this.setState({
                    audiofile: fightSound
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
          if(prevProps.clickSound !== this.props.clickSound || prevProps.fightTurn !== this.props.fightTurn){
            let sound = this.props.clickSound;    
            this.selectAudioFile(sound);
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