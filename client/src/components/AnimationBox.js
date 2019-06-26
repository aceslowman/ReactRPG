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
        justifyContent: 'center',
        position:'relative',
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
            position: '101%',
            active: false
        };
    }

    move = () => {
        // let {PositionLeft} = this.state;
        // PositionLeft+= window.innerWidth / 2;
        // this.setState({
        //   PositionLeft
        // })
        if(this.state.active){
            this.setState({position: '101%', active: false})
        }else{
            this.setState({position: '0px', active: true})
        }
    }

    render(){
        return(
            <React.Fragment>
                <button onClick={() => this.move()}>CLICK ME</button>
                <div style={{ ...styles.animationBoxStyle }}>
                    <div style={{ ...styles.Wrapper }}>
                        <CharacterPanel
                            left={true}
                            position={this.state.position}
                            move={() => this.move()}
                            character={{ name: "JIL", MAXHP: 100, HP: 100, AP: 30 }} />
                        <CharacterPanel
                            left={false}
                            position={this.state.position}
                            move={() => this.move()}
                            character={{ name: "Drake", MAXHP: 100, HP: 50, AP: 25 }} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}