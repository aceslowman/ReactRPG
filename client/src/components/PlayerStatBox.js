import React from "react";

const style = {
    statBoxStyle: {
        borderRadius : '5px',
        backgroundColor: '#05a19c',
        border: '3px solid black',
        fontFamily: 'monospace',
        width: '60%',
        display: 'flex',
        flexDirection: 'column',    
    },
    innerStatBox: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'teal',
        justifyContent: 'flex-start',
        height: '100%',
        margin: "1% 1% 0",
    },
    statStyle: {
        padding: 10,
        boxSizing: 'border-box',
        width: '50%',
        fontWeight: '550',
        fontSize: '1.4rem',
        backgroundImage: 'radial-gradient( #f7ff56, #f8b739)'
    },
    itemStyle: {
        padding: 10,
        boxSizing: 'border-box',
        width: '50%',
        fontWeight: '550',
        fontSize: '1.2rem',
        backgroundImage: 'radial-gradient( #94fc13, #009975)',
        margin: '1%'
    },
    nameStyle: {
        margin: "1% 1% 0",
        backgroundImage: 'radial-gradient( #ffa1c5, #f30cd4)',
        fontSize: '2rem',
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
                            Items: 
                            <ul>
                                {listedItems}
                            </ul>
                        </div>
                </div>
            </div>
        )
    }
}