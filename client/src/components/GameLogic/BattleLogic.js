export default function battleLogic(state){
    console.log(state);
    // retrieve player character from state
    let player = state.playerCharacter;
    // retrieve enemy character from state
    let enemy = state.passage.nonPlayerCharacters[0];

    let playerFirst = Math.random() > 0.5 ? true : false;
    console.log(playerFirst);
    if (playerFirst){
        if (playerAttack(player, enemy)) {
            console.log( "you defeated"+ enemy.name +"!!")
        } else {
            if (enemyAttack(enemy, player)) {
                console.log( " you have been slap down by)"+ enemy.name +".")
            } else {
                console.log( "damage has been inflicted")
            }
        }
    } else {
        if (enemyAttack(enemy, player)) {
            console.log( " you have been slap down by)"+ enemy.name +".")//make passage for this #1 return index with array of battle passage
        } else {
            if (playerAttack(player, enemy)) {
                console.log( "you defeated"+ enemy.name +"!!")//make a passage for this
            } else {
                console.log( "damage has been inflicted")//make passage for this 
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