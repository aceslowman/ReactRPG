import React from 'react';

const actionButtonStyle= {
    fontSize: "18px",
    borderRadius: "5px",
    width: '25%',
    height: '100%',
    color: 'green',
    backgroundColor: 'black'
};

export default class ActionButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    onClick(){
        //console.log('Click!');
        let num = this.props.index;
        //console.log(this.props.passage)
        let nextPassage = this.props.passage.nextPassages[num].path;
        
        if(this.props.passage.isFight){
            let action = this.props.passage.actions[num];
            let props = this.props;
            this.props.fight(action, props);
            return;
        }

        if(this.props.class === 'DISTRACT'){
            let hasBait = false;
            let bait= "Drake Bait";
            this.props.player.items.forEach((item) => {
                if(item.name === bait){hasBait = true;}
            });
            if(!hasBait){
                nextPassage = this.props.passage.nextPassages[num+1].path;
            }            
        }

        if(this.props.class === 'GETQUEST'){
            let hasQuestItem = false;
            let questItem= "Broken Axe";
            this.props.player.items.forEach((item) => {
                if(item.name === questItem){hasQuestItem = true;}
            });
            if(hasQuestItem){
                nextPassage = this.props.passage.nextPassages[num+3].path;
            }            
        }
     
        if(this.props.passage.availableItems.length > 0){
            let hasItem = false;
            let newItem = this.props.passage.availableItems[0];        
            this.props.player.items.forEach((item)=>{
                if (item._id === newItem._id){ hasItem = true;}
            });
            if (!hasItem && this.props.class === "TAKE"){
                let props = this.props;
                this.props.takeItem(newItem, props);
            }
        }
        //console.log(num);
        //console.log(nextPassage);
        this.props.nextPassage(nextPassage,this.props.passage.actions[num] );
    }
    
    render(){
        return(
            <input style={{...actionButtonStyle}} type= 'button' value = {this.props.text} 
            onClick= {()=>this.onClick()}></input>
        )
    }
}