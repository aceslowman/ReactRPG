import React from 'react';

const styles ={
    container:{
        width:'100%',
        height:'2.5vh',
        backgroundColor:'red',
        backgroundImage: 'radial-gradient( #fd0909, #2b0101',
        borderRadius:'15px',
        boxShadow:'rgb(221 19 19)',
        margin: '1vh 0 1vh'
    },

    progressInner: {
        width:'50%',
        height: '100%',
        backgroundColor: 'blue',
        backgroundImage: 'radial-gradient( #0909fd, #02296b',
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