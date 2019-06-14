export default function battleLogic(state){
    // retrieve player character from state
    let player = state.playerCharacter;
    // retrieve enemy character from state
    let enemy = state.currentEnemy;

    let playerFirst = Math.random() > 0.5 ? true : false;
    
    if (playerFirst){
        if (playerAttack(player, enemy)) {
            return "you defeated"+ enemy.name +"!!";
        } else {
            if (enemyAttack(enemy, player)) {
                return " you have been slap down by"+ enemy.name +".";
            } else {
                return "damage has been inflicted";
            }
        }
    } else {
        if (enemyAttack(enemy, player)) {
            return " you have been slap down by"+ enemy.name +".";//make passage for this #1 return index with array of battle passage
        } else {
            if (playerAttack(player, enemy)) {
                return "you defeated"+ enemy.name +"!!";//make a passage for this
            } else {
                return "damage has been inflicted";//make passage for this 
            }     
        }       
    }   
}
//supporting function for players attack phase within switch.
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