import React from "react";

const statBoxStyle = {
    borderRadius : '4px',
    backgroundColor: 'beige',
    borderStyle: 'solid',
    fontFamily: 'monospace',
    height: '250px',
    width: '250px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',  
};

const statStyle = {
    textAlign: 'left',
    width: '50%',
    fontSize: '1rem',
    flex: 'none',
};

const titleStyle = {
    width : '100%',
    fontSize: '2rem'
};

export default class PlayerStatBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return( 
            <div style= {statBoxStyle}>
                <h2 style = {titleStyle}>Player {this.props.player.name}</h2>
                    <div style= {statStyle}>
                        <h3 >HP: {this.props.player.HP}</h3>
                        <h3 >AP: {this.props.player.AP}</h3>
                        <h3 >XP: {this.props.player.XP}</h3>
                    </div>
                    <div style= {statStyle} >
                        <h3>Items:</h3>
                        <ul >
                            <li>Item 1  </li>
                            <li>Item 2  </li>
                            <li>Item 3  </li>
                        </ul>
                    </div>                
            </div>
        )
    }
}