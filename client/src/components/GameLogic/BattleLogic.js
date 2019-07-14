export default function battleLogic(props){

    let player = props.player;
    let enemy = props.enemy;   
    let playerFirst = Math.random() > 0.5 ? true : false;
    
    if (playerFirst){
        if (playerAttack(player, enemy)) {
            props.passage.isFight = false;
            return;       
        } else {
            if (enemyAttack(enemy, player)) {
                props.passage.isFight = false;
                return;
            } else {
                props.passage.isFight=true;
                return;
            }
        }
    } else {
        if (enemyAttack(enemy, player)) {
            props.passage.isFight = false;
            return ;
        } else {
            if (playerAttack(player, enemy)) {
                props.passage.isFight = false;
                return;
            } else {
                props.passage.isFight=true;
                return;
            }     
        }       
    }  
}
//supporting function for players attack phase within switch.
function playerAttack(player, enemy){
    let AP = Math.round(Math.random() * player.AP);
    if(AP > enemy.HP){
        enemy.HP = 0;
        return true;
    }else{
        enemy.HP -= AP;
        return false;
    }  
}
//supporting function for enemies attack phase with in switch.
function enemyAttack(enemy, player){
    let AP = Math.round(Math.random() * enemy.AP);
    if(AP > player.HP){
        player.HP = 0;
        return true;
    }else{
        player.HP -= AP;
        return false;
    }
}