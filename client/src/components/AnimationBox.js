import React from 'react';

const animationBoxStyle = {
    border: '1px',
    borderRadius: '20px',
    height: '60%',
    width: '90%',
    opacity: '.5',
    backgroundColor: 'white'
};

export default class AnimationBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <div style= {animationBoxStyle}></div>
        )
    }
}