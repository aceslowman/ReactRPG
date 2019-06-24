export default function battleLogic(state){
    console.log('battle logic');
    console.log(state);
    // retrieve player character from state
    let player = state.player;
    console.log(player);
    // retrieve enemy character from state
    let enemy = state.passage.nonPlayerCharacters[0];
    
    

    let playerFirst = Math.random() > 0.5 ? true : false;
    console.log(playerFirst);
    if (playerFirst){
        if (playerAttack(player, enemy)) {
            console.log( "you defeated"+ enemy.name +"!!");
            return;       
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
            return ;
        } else {
            if (playerAttack(player, enemy)) {
                console.log( "you defeated"+ enemy.name +"!!")//make a passage for this
            } else {
                console.log( "damage has been inflicted")//make passage for this 
            }     
        }       
    } 
    return;  
}
//supporting function for players attack phase within switch.
function playerAttack(player, enemy){
    let AP = Math.round(Math.random() * player.AP);

    if(AP > enemy.HP){
        enemy.HP = 0;
        console.log('Enemy HP: ', enemy.HP);
        console.log('Player HP : ', player.HP);
        return true;
    }else{
        enemy.HP -= AP;
        console.log('Enemy HP: ', enemy.HP);
        console.log('Player HP : ', player.HP);
        return false;
    }
    
}
//supporting function for enemies attack phase with in switch.
function enemyAttack(enemy, player){
    let AP = Math.round(Math.random() * enemy.AP);

    if(AP > player.HP){
        player.HP = 0;
        console.log('Enemy HP: ', enemy.HP);
        console.log('Player HP : ', player.HP);
        return true;
    }else{
        player.HP -= AP;
        console.log('Enemy HP: ', enemy.HP);
        console.log('Player HP : ', player.HP);
        return false;
    }

}