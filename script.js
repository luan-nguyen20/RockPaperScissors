let randInt, comChoice, userChoice;
const catSFX = new Audio('audio/kitten4.wav');
const winRoundSFX = new Audio('audio/winRound.wav');
const winGameSFX = new Audio('audio/winGame.wav');
const loseRoundSFX = new Audio('audio/loseRound.wav');
const loseGameSFX = new Audio('audio/loseGame.wav');
const pChoiceImg = document.querySelector('#pChoiceImg');
const cChoiceImg = document.querySelector('#cChoiceImg');
const roundResultTxt = document.querySelector('.roundResultTxt');
const resetBtn = document.querySelector('#resetBtn');

//event listeners for each image to play round and remove transition
const choiceImgs = Array.from(document.querySelectorAll('.choiceImg'));
choiceImgs.forEach(choice => choice.addEventListener('click',playRound));
choiceImgs.forEach(choice => choice.addEventListener('transitionend',removeTransition));

//event listeners for reset button
resetBtn.addEventListener('click', reset);
resetBtn.addEventListener('transitionend',removeTransition);

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

// play a round
// keep scores
let playerScore = 0;
let comScore = 0;

function playRound(e){
    //audio.currentTime = 0;
    //audio.play();
    comChoice = comPlay();
    userChoice = e.target.id;
    e.target.classList.add('chosen');
    console.log("user: " + userChoice + " COM: " + comChoice);
    switch(userChoice){
        case 'rockImg':
            switch(comChoice){
                case 'Rock':
                    //draw
                    catSFX.currentTime = 0;
                    catSFX.play();
                    cChoiceImg.src="images/rock.jpg";
                    roundResultTxt.textContent = 'Draw';
                    break;
                case 'Paper':
                    //com wins
                    loseRoundSFX.currentTime = 0;
                    loseRoundSFX.play();
                    comScore++;
                    updateScores(playerScore,comScore);
                    cChoiceImg.src="images/paper.jpg";
                    roundResultTxt.textContent = 'You lose !';
                    break;
                case 'Scissors':
                    //player wins
                    winRoundSFX.currentTime = 0;
                    winRoundSFX.play();
                    playerScore++;
                    updateScores(playerScore,comScore);
                    cChoiceImg.src="images/scissors.jpg";
                    roundResultTxt.textContent = 'You win !';
                    break;
            }
            pChoiceImg.src = "images/rock.jpg";
            break;
        case 'paperImg':
            switch(comChoice){
                case 'Rock':
                    //player wins
                    winRoundSFX.currentTime = 0;
                    winRoundSFX.play();
                    playerScore++;
                    updateScores(playerScore,comScore);
                    cChoiceImg.src="images/rock.jpg";
                    roundResultTxt.textContent = 'You win !';
                    break;
                case 'Paper':
                    //draw
                    catSFX.currentTime = 0;
                    catSFX.play();
                    cChoiceImg.src="images/paper.jpg";
                    roundResultTxt.textContent = 'Draw';
                    break;
                case 'Scissors':
                    //com wins
                    loseRoundSFX.currentTime = 0;
                    loseRoundSFX.play();
                    comScore++;
                    updateScores(playerScore,comScore);
                    cChoiceImg.src="images/scissors.jpg";
                    roundResultTxt.textContent = 'You lose !';
                    break;
            }
            pChoiceImg.src = "images/paper.jpg";
            break;
        case 'scissorsImg':
            switch(comChoice){
                case 'Rock':
                    //com wins
                    loseRoundSFX.currentTime = 0;
                    loseRoundSFX.play();
                    comScore++;
                    updateScores(playerScore,comScore);
                    cChoiceImg.src="images/rock.jpg";
                    roundResultTxt.textContent = 'You lose !';
                    break;
                case 'Paper':
                    //player wins
                    winRoundSFX.currentTime = 0;
                    winRoundSFX.play();
                    playerScore++;
                    updateScores(playerScore,comScore);
                    cChoiceImg.src="images/paper.jpg";
                    roundResultTxt.textContent = 'You win !';
                    break;
                case 'Scissors':
                    //draw
                    catSFX.currentTime = 0;
                    catSFX.play();
                    cChoiceImg.src="images/scissors.jpg";
                    roundResultTxt.textContent = 'Draw';
                    break;
            }
            pChoiceImg.src = "images/scissors.jpg";
            break;
        default: break;
    }

    if(playerScore >= 5){
        winGameSFX.play();
        roundResultTxt.classList.add('gameResultTxt');
        choiceImgs.forEach(choice => choice.classList.add('noDisplay'));
    }
    else if(comScore >= 5){
        loseGameSFX.play();
        roundResultTxt.classList.add('gameResultTxt');
        choiceImgs.forEach(choice => choice.classList.add('noDisplay'));
    }
}

//reset game
function reset(){
    resetBtn.classList.add('chosen');
    catSFX.currentTime = 0;
    catSFX.play();
    playerScore = 0;
    comScore = 0;
    updateScores(playerScore,comScore);
    pChoiceImg.src = "";
    cChoiceImg.src = "";
    roundResultTxt.textContent = "Let's start !";
    choiceImgs.forEach(choice => choice.classList.remove('noDisplay'));
    roundResultTxt.classList.remove('gameResultTxt');
}

//update player and COM scores and edit DOM
function updateScores(playerScore,comScore){
    const pScoreSpan = document.querySelector('#playerScore');
    const cScoreSpan = document.querySelector('#comScore');
    pScoreSpan.textContent = 'Your score: ' + playerScore;
    cScoreSpan.textContent = 'COM score: ' + comScore;
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('chosen');
}

