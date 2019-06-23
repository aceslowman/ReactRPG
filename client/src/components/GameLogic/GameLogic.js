/*
    below are some samples of what this data might look like.

    let action = {
        "_id": "5cf32cdeea7d8b08f9d37d45",
        "text": "You fight a tremendous beast!",
        "action": "BATTLE",
        "success": "You defeated the ...",
        "failure": "You've been defeated by the ...",
        "__v": 0
    },

    let state = {
        playerCharacter: {
            "_id": "5cf0af7d66ecb01288967ac1",
            "name": "Default Defaultson",
            "type": "Viking",
            "AP": 90,
            "HP": 60,
            "XP": 2,
            "level": 0,
            "__v": 0
        },
        currentEnemy: {
            "_id": "5ce774062992a80bba5f355c",
            "name": "Drake",
            "AP": 20,
            "HP": 4,
            "level": 2,
            "friendly": false,
            "__v": 0
        }
    }
*/

import battleLogic from './BattleLogic';
// import FleeLogic from './FleeLogic';

export default function gameLogic(action, state){
    console.log(action);
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
}



/* could create additional passage for another term of the battle.

battle passage: {
    nextPassages : [
0: player deated passage ,
1: enemy defeated passage,
2: damage dealt passage== 2 actions within this passage:
        1.continue fight
        2. attempt flee.
            flee chance
            if you fail enemy gains attack of opportinity
]
*/