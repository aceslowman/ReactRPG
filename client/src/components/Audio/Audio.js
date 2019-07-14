import React from 'react';

const startMenu ='473996__esistnichtsoernst__space-arp-f-chords.wav';
const homeSound = '456058__inchadney__fireplace.wav';
const yardSound = '257997__foolboymedia__shanty-town.wav';
const travelSound = 'travelMusic.wav';
const townSound = '423119__ogsoundfx__medieval-city-sample.wav';
const forrestSound = '445133__NCAgreek555__fantasy-loop.mp3';
const nestSound = '188815__porphyr__battle-horn.wav'
const battleSound='250856__joshuaempyre__epic-orchestra-loop.wav';


export default class Audio extends React.Component{
    constructor(props){
        super(props);
        this.audio='';

        this.state = {
            audiofile: startMenu
        };
    }

    setTrack(e){
        //for options menu
    }

    play(){
        this.audio.pause();
        this.audio.load();
        this.audio.play();
    } 

    

    selectAudioFile(location){
       
            switch (location) {
            case 'HOME':
                this.setState({
                  audiofile: homeSound  
                });
                this.play();
                break;
            case 'YARD':
                this.setState({
                    audiofile: yardSound
                });
                this.play();
                break;
            case 'HOMEROAD':
                this.setState({
                    audiofile: travelSound
                });
                this.play();
                break;
            case 'CROSSROADS':
                this.setState({
                    audiofile: travelSound
                });
                this.play();
                break;
            case 'FORRESTROAD':
                this.setState({
                    audiofile: forrestSound
                });
                this.play();
                break;
            case 'TAVERN':
                this.setState({
                    audiofile: townSound
                    });
                this.play();
                break;
            case 'SMITH':
                this.setState({
                    audiofile: townSound
                });
                this.play();
                break;
            case 'TOWN':
                this.setState({
                    audiofile: townSound
                });
                this.play();
                break;
                
            case 'TOWNROAD':
                this.setState({
                    audiofile: travelSound 
                });
                break;
            case 'NEST':
                this.setState({
                    audiofile: nestSound
                });
                this.play();
                break;
            case 'STARTMENU':
                this.setState({
                    audiofile: startMenu
                    });
               this.play();
               break;
                
            default: 
                this.setState({

                })
                break;
        }
        
    }

    componentDidMount(){
        this.selectAudioFile(this.props.passage.location);
    }


    componentDidUpdate(prevProps){
        
        if(prevProps.passage && (this.props.passage.location !== prevProps.passage.location)){   
        
            
            let location = this.props.passage.location;
            
            if(this.props.passage.isFight){ 
                this.setState({
                    audiofile: battleSound
                });
                this.play();
            } else if(this.props.passage.location === 'HOMEROAD' && (prevProps.passage.location === 'TOWNROAD' || prevProps.passage.location === 'CROSSROADS' )){
                
                return
            } else if(this.props.passage.location === 'CROSSROADS' && (prevProps.passage.location === 'TOWNROAD' || prevProps.passage.location === 'HOMEROAD' )){
                
                return
            } else if (this.props.passage.location === 'TOWNROAD' && (prevProps.passage.location === 'CROSSROADS' || prevProps.passage.location === 'HOMEROAD' )){
               
                return
             }else{
                this.selectAudioFile(location); 
             }  
        }
        if(prevProps.volume && (prevProps.volume !== this.props.volume)){
            this.audio.volume = this.props.volume;
        }
    }

    render(){
        return(
            <div style={{display: this.props.modalOpen ? 'block' : 'none' }} >

                <audio ref={(ref)=>{this.audio = ref} } autoPlay  loop={true} >
                    <source 
                    src={`audio/${this.state.audiofile}`} type="audio/wav">      
                    </source>
                </audio>
                <button onClick={()=>this.props.onClose()}>Return</button>
            </div>
        )
    }

}