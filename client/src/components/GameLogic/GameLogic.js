import battleLogic from './BattleLogic';
// import FleeLogic from './FleeLogic';

export default function gameLogic(action, state){
    
    console.log(action);
    console.log(state);
    switch(action.class){
        case 'FIGHT':
            console.log("HIT");
            battleLogic(state);
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
    
    console.log("After action: ", state);
    return state;  
}