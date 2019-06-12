import React from "react";

const statBoxStyle = {
    borderRadius : '4px',
    backgroundColor: 'beige',
    borderStyle: 'solid',
    fontFamily: 'monospace',
    height: '30%',
    width: '60%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'row',
};

const innerStatBox= {
    display: 'flex',
    flex: 'none',
    justifyContent: 'flex-start'
};

const statColumnStyle = {
    flex: 'flex-grow flex-shrink flex-basis',
    flexDirection: 'column',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',   
};

const statStyle = {
    fontSize: '1.2rem',
    display: 'flex',
    flex: 'flex-grow flex-shrink flex-basis',
    fontWeight: '600',
    justifyContent: 'center',
};

const titleStyle = {
    flex: 'flex-grow flex-shrink flex-basis',
    fontSize: '1.5rem',
    display: 'flex',
    
};

export default class PlayerStatBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return( 
            <div style= {statBoxStyle}>
                <h2 style = {titleStyle}>Player: {this.props.player.name}</h2>
                <div style= {innerStatBox}>
                    <div style= {statColumnStyle}>    
                    
                           <div style= {statStyle} > HP: {this.props.player.HP} </div>
                          <div style= {statStyle} > AP: {this.props.player.AP} </div>
                            <div style= {statStyle} > XP: {this.props.player.XP} </div>
                            <div style= {statStyle} > Gold: {this.props.player.gold}</div>

                    </div>
                    <div style= {statColumnStyle}>

                            <div style = {statStyle}>Items:</div>
                            <div style= {statStyle}>{this.props.player.items[0].name} </div>
                            <div style= {statStyle}>{this.props.player.items[1].name} </div>
                            <div style= {statStyle}>{this.props.player.items[2].name} </div>

                    </div>
                </div>
            </div>
        )
    }
}