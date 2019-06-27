import battleLogic from './BattleLogic';
// import FleeLogic from './FleeLogic';

export default function gameLogic(action, props){
    
    //console.log(action);
    console.log(props);
    switch(action.class){
        case 'FIGHT':
            console.log("HIT");
            battleLogic(props);
            break;
        case 'FLEE':
            //fleeLogic(state);
            break;
        case 'TAKE':
            //if statement for random chance
            break;
        default:
            break;
    } 
    
    //console.log("After action: ", props);
    return props;  
}