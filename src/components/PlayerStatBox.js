import React from "react";

const statBoxStyle = {
    borderRadius : '4px',
    backgroundColor: 'beige',
    borderStyle: 'solid',
    fontFamily: 'monospace',
    height: '100%',
    width: '250px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start'

}
const statStyle = {
    textAlign: 'left',
    width: '50%',
    fontSize: '1rem',
    flex: 'none'

}

const titleStyle = {
    width : '100%',
    fontSize: '2rem'
}








export default class PlayerStatBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }




    render(){
        return(
            <div style= {statBoxStyle}>
                <h2 style = {titleStyle}>Player Stats</h2>
                
                    <div style= {statStyle}>
                        <h3 >HP: data</h3>
                        <h3 >AP: data</h3>
                    </div>
                    <div style= {statStyle} >
                        <ul ><h3>Items:</h3>
                            <li><h4>1st item</h4></li>
                            <li><h4>2nd Item</h4></li>
                            <li><h4>3rd Item</h4></li>
                        </ul>
                    </div>
                
                
            </div>
        )
    }
}