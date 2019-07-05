import battleLogic from './BattleLogic';
import fleeLogic from './FleeLogic';

export default function gameLogic(action, props){
    
    console.log(props);
    switch(action.class){
        case 'FIGHT':
            //console.log("HIT");
            battleLogic(props);
            break;
        case 'FLEE':
            fleeLogic(props);
            break;
        case 'TAKE':
            //if statement for random chance
            break;
        default:
            break;
    } 
    return props;  
}