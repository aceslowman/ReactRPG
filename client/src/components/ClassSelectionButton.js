import React from 'react';

const buttonStyle = {
    borderRadius: '3px',
    backgroundImage: 'linear-gradient( to bottom right, #f79c1d, #ffe837)',
    border: '3px solid black',
    padding:'10px 0 0',
    fontSize: '1.2rem',
    fontFamily: 'monospace',
    fontWeight: '550'
};

export default class ClassSelectionComponent extends React.Component{
    constructor(props){
        super(props);
        this.state= {};
    }

    onClick(){
        let img = this.props.src;
        let id = this.props.id;
        let type = this.props.alt;
        this.props.selectClass(img, id, type);
    }

    render(){
        return(
            <button style= {buttonStyle} onClick= {()=>this.onClick()}>
                <img src={this.props.src} id= {this.props.id} alt= {this.props.alt} style= {this.props.style} />
                <p>{this.props.alt}</p>
            </button>
        )
    }
}