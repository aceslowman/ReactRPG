import React from 'react';

const styles ={
    container:{
        width:'100%',
        height:'20px',
        backgroundColor:'red',
        borderRadius:'15px',
        boxShadow:'rgb(221 19 19)'
    },

    progressInner: {
        width:'50%',
        height: '100%',
        backgroundColor: 'blue',
        borderRadius:'15px'

    }
}


export default class HeathBar extends React.Component{

    render(){
        return(
            <div style={styles.container}>
                 <div style={{...styles.progressInner, width:`${this.props.progress}%`}}>
                 {this.props.character.HP}/{this.props.character.MAXHP}
                 </div>
            </div>

        )
    }

}