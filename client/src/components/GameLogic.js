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

export default function GameLogic(action, state){

 

    switch(action.type){
        case "BATTLE":
            // retrieve player character from state
            let player = state.playerCharacter;
            // retrieve enemy character from state
            let enemy = state.currentEnemy;

            let playerFirst = Math.random() > 0.5 ? true : false;
            
            if(playerFirst){
                if (playerAttack(player, enemy)){
                    return "you defeated"+ enemy.name +"!!";
                } else {
                    if (enemyAttack(enemy, player)){
                        return " you have been slap down like a hoe by"+ enemy.name +".";
                    }else{
                        return "damage has been inflicted";
                    }
                }
            }
            else{
                if(enemyAttack(enemy, player)){
                    return " you have been slap down like a hoe by"+ enemy.name +".";//make passage for this #1 return index with array of battle passage
                }else{
                    if (playerAttack(player, enemy)){
                        return "you defeated"+ enemy.name +"!!";//make a passage for this
                    }else{
                        return "damage has been inflicted";//make passage for this 
                    }     
                }
                    
            }


                    /*
                        passageIndex should correspond with the
                        action that was sent. this might mean that
                        the action should contain an index value, 
                        or something else should be figured out for
                        handling next passages.
                    
                    let passageIndex = 0;
                    return passageIndex;
                */

            return 0;
        case "FLEE":

            return 0;
        default:
            console.error('action type was not recognized');
    }
    
}
//supporting for players attack phase
function playerAttack(player, enemy){
    let ap = Math.random() * player.ap;

    if(ap > enemy.hp){
        enemy.hp = 0;
        return true;
    }else{
        enemy.hp -= ap;
        return false;
    }
}
//supporting function for enemies attack phase with in switch.
function enemyAttack(enemy, player){
    let ap = Math.random() * enemy.ap;

    if(ap > player.hp){
        player.hp = 0;
        return true;
    }else{
        player.hp -= ap;
        return false;
    }

}

/* could create additional passage for another term of the battle.

battle passage: {
    nextPassages : [
0: player deated passage,
1: enemy defeated passage,
2: damage dealt passage== 2 actions within this passage:
        1.continue fight
        2. attempt flee.
            flee chance
            if you fail enemy gains attack of opportinity
]
*/