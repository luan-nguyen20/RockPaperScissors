let randInt;

// randomly return Rock, Paper or Scissors
function comPlay(){
    // assign randomly 0,1 or 2
    randInt = Math.floor(Math.random()*2);
    
    switch(randInt){
        case 0:
            return('Rock');
            break;
        case 1:
            return ('Paper');
            break;
        case 2:
            return('Scissors');
            break;
        default:break;
    }
}

//play a single round
function playRound(playerSelection, comSelection){

}