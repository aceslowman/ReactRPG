import React from "react";

const style = {
    statBoxStyle: {
        borderRadius : '4px',
        backgroundColor: 'beige',
        borderStyle: 'solid',
        fontFamily: 'monospace',
        height: '30%',
        width: '60%',
        display: 'flex',
        // flexWrap: 'wrap',
        // justifyContent: 'center',
        flexDirection: 'column',
    },
    innerStatBox: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'green',
        justifyContent: 'flex-start'
    },
    statColumnStyle: {
        // flex: 'flex-grow flex-shrink flex-basis',
        // flexDirection: 'column',
        // display: 'flex',
        // flexWrap: 'wrap',
        // justifyContent: 'center',
    },
    statStyle: {
        // fontSize: '1.2rem',
        // display: 'flex',
        // flex: 'flex-grow flex-shrink flex-basis',
        // fontWeight: '600',
        // justifyContent: 'center',
        padding: 10,
        boxSizing: 'border-box',
        width: '50%'
    },
    titleStyle: {
        // flex: 'flex-grow flex-shrink flex-basis',
        // fontSize: '1.5rem',
        // display: 'flex',
        marginTop: 0,
        backgroundColor: 'blue'
    }
};
    
export default class PlayerStatBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return( 
            <div style={style.statBoxStyle}>
                <h2 style={style.titleStyle}>Player: {this.props.player.name}</h2>
                <div style={style.innerStatBox}>
                    {/* <div style={style.statColumnStyle}>     */}
                        <div style={style.statStyle}> 
                            HP: {this.props.player.HP} 
                        </div>
                        <div style={style.statStyle}> 
                            AP: {this.props.player.AP} 
                        </div>
                        <div style={style.statStyle}> 
                            XP: {this.props.player.XP} 
                        </div>
                        <div style={style.statStyle}> 
                            Gold: {this.props.player.gold}
                        </div>
                        <div style={{...style.statStyle, width: '100%'}}>  
                            Items: 
                            <ul>
                                <li>{this.props.player.items[0].name}</li>
                                <li>{this.props.player.items[1].name}</li>
                                <li>{this.props.player.items[2].name}</li>
                            </ul>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        )
    }
}