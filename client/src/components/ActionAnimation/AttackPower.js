import React from 'react';

const styles ={
    container:{
        width:'',
        height:'20px',
        backgroundColor:'red',
        borderRadius:'15px',
        boxShadow:'rgb(221 19 19)'
    },

    progressInner: {
        width:'50%',
        height: '100%',
        backgroundColor: 'aqua',
        borderRadius:'15px'

    }
}


export default class AttackPower extends React.Component{
    
    render(){
        return(
            <div style={styles.container}>
                <div>{this.props.character.AP}</div>
            </div>

        )
    }

}