import React from 'react';



export default class Audio extends React.Component{
    constructor(props){
        super(props);
        this.audio='';

        this.state = {
            //volume: 'num',
            //audioTrack:'string'
        };
    }

    setTrack(e){
        
    }
    componentDidUpdate(prevProps){
        if(prevProps.audiofile !== this.props.audiofile){
            console.log(this.audio);
            this.audio.load();
            this.audio.play();
        }
    }

    render(){
        return(
            <div style={{display: this.props.modalOpen ? 'block' : 'none' }} >

                <audio ref={(ref)=>{this.audio = ref} } autoPlay  loop={this.props.looping} >
                    <source 
                    src={this.props.audiofile} type="audio/wav">      
                    </source>
                </audio>
                <button onClick={()=>this.props.onClose()}>Return</button>
            </div>
        )
    }

}