import React from "react";

const statBoxStyle = {
    borderRadius : '4px',
    backgroundColor: 'beige',
    borderStyle: 'solid',
    fontFamily: 'monospace',
    height: '280px',
    width: '300px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginLeft: '50px',
    marginTop: '150px',
    padding: '10px'
}

const statStyle = {
    textAlign: 'left',
    width: '50%',
    fontSize: '1rem',
    flex: 'none',
}

const titleStyle = {
    width : '100%',
    fontSize: '2rem'
}








export default class PlayerStatBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            player: {}
        }
    }

    componentDidMount(){
        fetch('/trialendpoint')
            .then(res=>res.json())
                .then(player => this.setState({player}, ()=> console.log(`player data fetched..`, player.items)))
        
    }


    render(){
        return(
            
            
            <div style= {statBoxStyle}>
                <h2 style = {titleStyle}>Player {this.state.player.name}</h2>

                    <div style= {statStyle}>
                        <h3 >HP: {this.state.player.hp}</h3>
                        <h3 >AP: {this.state.player.ap}</h3>
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