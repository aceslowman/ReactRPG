export default function battleLogic(props){
    console.log('battle logic');
    console.log(props);
    // retrieve player character from props
    let player = props.player;
    console.log(player);
    // retrieve enemy character from props
    let enemy = props.enemy;
    
    let playerFirst = Math.random() > 0.5 ? true : false;
    console.log(playerFirst);
    if (playerFirst){
        if (playerAttack(player, enemy)) {
            console.log( "you defeated"+ enemy.name +"!!");
            props.passage.isFight = false;
            return;       
        } else {
            if (enemyAttack(enemy, player)) {
                console.log( " you have been slap down by)"+ enemy.name +".");
                props.passage.isFight = false;
                return;
            } else {
                console.log( "damage has been inflicted");
                return;
            }
        }
    } else {
        if (enemyAttack(enemy, player)) {
            console.log( " you have been slap down by)"+ enemy.name +".")//make passage for this #1 return index with array of battle passage
            props.passage.isFight = false;
            return ;
        } else {
            if (playerAttack(player, enemy)) {
                console.log( "you defeated"+ enemy.name +"!!")//make a passage for this
                props.passage.isFight = false;
                return;
            } else {
                console.log( "damage has been inflicted")//make passage for this 
                return;
            }     
        }       
    }  
}
//supporting function for players attack phase within switch.
function playerAttack(player, enemy){
    let AP = Math.round(Math.random() * player.AP);
    console.log("player hit");
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
    console.log("enemy hit");
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