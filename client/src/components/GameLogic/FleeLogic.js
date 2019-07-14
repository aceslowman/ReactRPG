import battleLogic from './BattleLogic';

export default function fleeLogic(props){
    let escapeChance = Math.round(Math.random() * 10);

    if (escapeChance <= 5 ){
        props.passage.isFight = false;
        console.log('FLEE : ' , props);
        
    }else{
        props.passage.text = "You weren't fast enough to flee";
        battleLogic(props);
        console.log('FLEE : ' , props);
    }
    return;
}