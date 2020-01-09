let randInt, comChoice, userChoice;

// randomly return Rock, Paper or Scissors
function comPlay(){
    // assign randomly 0,1 or 2
    randInt = Math.floor(Math.random()*3);

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

//get user selection
function userPlay(userInput){
    switch(String(userInput).toUpperCase()){
        case 'ROCK':
            return('Rock');
            break;
        case 'PAPER':
            return('Paper');
            break;
        case 'SCISSORS':
            return('Scissors');
            break;
        default:
            alert("Please enter \'Rock\', \'Paper\' or \'Scissors\'");
            return('Invalid');
            break;
    }
}

//play a single round
function playRound(playerSelection, comSelection){
    comChoice = comPlay();
    userChoice = userPlay(prompt("Please enter \'Rock\', \'Paper\' or \'Scissors\'"));
    console.log(comChoice + '  ' + userChoice);
//return round winner
}

//play multiple rounds and keep scores
function game(){
//return game winner
}