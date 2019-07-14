import React from "react";

const style = {
    statBoxStyle: {
        borderRadius : '5px',
        backgroundColor: '#69779b',
        backgroundImage: 'linear-gradient( to bottom right, #BBBBBB, #283148)',
        border: '3px solid black',
        fontFamily: 'monospace',
        width: '70%',
        display: 'flex',
        flexDirection: 'column', 
        overflowY: 'hidden',
        height: '45%'
    },
    innerStatBox: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'teal',
        justifyContent: 'flex-start',
        height: '50%',
        margin: "1% 1% 0"
    },
    statStyle: {
        padding: 10,
        boxSizing: 'border-box',
        width: '50%',
        fontWeight: '550',
        fontSize: '1.6vw',
        backgroundImage: 'radial-gradient( #fdef96, #f7b71d)',
    },
    itemStyle: {
        padding: 10,
        boxSizing: 'border-box',
        //width: '50%',
        fontWeight: '550',
        fontSize: '1.3vw',
        backgroundImage: 'radial-gradient( #009975, #004a2f)',
        //margin: '1%',
        height: '100%',
        overflowY: 'auto',
        display: 'flex',
        justifyContent: 'flex-start'

},
    nameStyle: {
        margin: "1% 1% 0",
        backgroundImage: 'radial-gradient( #5588a3, #145374)',
        fontSize: '2vw',
        fontWeight: '700',
        textAlign: 'center'
    }
};
    
export default class PlayerStatBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        let listedItems = this.props.player.items.map((item, key)=>
            <li key= {item._id} > {item.name}</li>
        );
        
        return( 
            <div style={style.statBoxStyle}>
                <h2 style={style.nameStyle}> {this.props.player.name}<br/>the {this.props.player.type}</h2>
                <div style={style.innerStatBox}>                   
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
                        <div style={{...style.itemStyle, width: '100%'}}>  
                            <p style= {{'fontSize': '1.4vw'}}>Items:</p> 
                            <ul>
                                {listedItems}
                            </ul>
                        </div>
                </div>
            </div>
        )
    }
}