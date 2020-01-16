let randInt, comChoice, userChoice;
let totalGameRounds;
let roundResult, playerScore, comScore;
let audio = new Audio('audio/kitten4.wav');

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

/*
// process user selection
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
            alert("Please only enter \'Rock\', \'Paper\' or \'Scissors\'");
            return('Invalid');
            break;
    }
}
*/

// play a single round
// return values:
// 0: com wins, 1: player wins, 
// 2:draw, 3:invalid user input(com wins)
function playRound(e){
    audio.currentTime = 0;
    audio.play();
    comChoice = comPlay();
    userChoice = e.target.id;
    e.target.classList.add('chosen');
    console.log("user: " + userChoice + " COM: " + comChoice);
    switch(userChoice){
        case 'Rock':
            switch(comChoice){
                case 'Rock':
                    return 2;
                    break;
                case 'Paper':
                    return 0;
                    break;
                case 'Scissors':
                    return 1;
                    break;
            }
            break;
        case 'Paper':
            switch(comChoice){
                case 'Rock':
                    return 1;
                    break;
                case 'Paper':
                    return 2;
                    break;
                case 'Scissors':
                    return 0;
                    break;
            }
            break;
        case 'Scissors':
            switch(comChoice){
                case 'Rock':
                    return 0;
                    break;
                case 'Paper':
                    return 1;
                    break;
                case 'Scissors':
                    return 2;
                    break;
            }
            break;
        default:
            return 3;
            break;
    }
}

// show user and COM choices
function showChoice(){
    if(userChoice==='Invalid'){
        alert('You entered an invalid choice !');
    }
    else{
        alert('You chose ' + userChoice + ' ! COM chose ' + comChoice + ' !');
    } 
}

// show round winner
function showRoundWinner(result){
    switch(result){
        case 0:
        case 3:
            alert('COM wins !');
            break;
        case 1:
            alert('You win !');
            break;
        case 2:
            alert('DRAW !!');
            break;
        default:break;
    }
}

/*
//totalGameRounds = 5;

// play multiple rounds and keep scores
function game(){
    playerScore = 0;
    comScore = 0;
    
    for(i=0; i< totalGameRounds; i++){
        roundResult = playRound();
        showChoice();
        showRoundWinner(roundResult);

        switch(roundResult){
            case 0:
            case 3:
                comScore++;
                break;
            case 1:
                playerScore++;
                break;
            case 2:
                break;
            default:break;
        }
    }

    alert('Your score: ' + playerScore + '\n'
    + 'COMscore: ' + comScore);

    if(playerScore > comChoice){
        alert('Congrats ! You win !');
    }
    else if(comScore > playerScore){
        alert('You lost. Better luck next time !');
    }
    else{
        alert('The game ended in a DRAW !!');
    }
}
*/

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('chosen');
}

//event listeners for each image to play round and remove transition
const choiceImgs = Array.from(document.querySelectorAll('.choiceImg'));
choiceImgs.forEach(choice => choice.addEventListener('click',playRound));
choiceImgs.forEach(choice => choice.addEventListener('transitionend',removeTransition));