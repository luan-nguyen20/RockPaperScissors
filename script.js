let randInt, comChoice, userChoice;
let audio = new Audio('audio/kitten4.wav');
const pChoiceImg = document.querySelector('#pChoiceImg');
const cChoiceImg = document.querySelector('#cChoiceImg');
const roundResultTxt = document.querySelector('.roundResultTxt');
const resetBtn = document.querySelector('#resetBtn');

//event listeners for each image to play round and remove transition
const choiceImgs = Array.from(document.querySelectorAll('.choiceImg'));
choiceImgs.forEach(choice => choice.addEventListener('click',playRound));
choiceImgs.forEach(choice => choice.addEventListener('transitionend',removeTransition));

//event listener for reset button
resetBtn.addEventListener('click', reset);

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
    audio.currentTime = 0;
    audio.play();
    comChoice = comPlay();
    userChoice = e.target.id;
    e.target.classList.add('chosen');
    console.log("user: " + userChoice + " COM: " + comChoice);
    switch(userChoice){
        case 'rockImg':
            switch(comChoice){
                case 'Rock':
                    //draw
                    cChoiceImg.src="images/rock.jpg";
                    roundResultTxt.textContent = 'Draw';
                    break;
                case 'Paper':
                    //com wins
                    comScore++;
                    updateScores(playerScore,comScore);
                    cChoiceImg.src="images/paper.jpg";
                    roundResultTxt.textContent = 'You lose !';
                    break;
                case 'Scissors':
                    //player wins
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
                    playerScore++;
                    updateScores(playerScore,comScore);
                    cChoiceImg.src="images/rock.jpg";
                    roundResultTxt.textContent = 'You win !';
                    break;
                case 'Paper':
                    //draw
                    cChoiceImg.src="images/paper.jpg";
                    roundResultTxt.textContent = 'Draw';
                    break;
                case 'Scissors':
                    //com wins
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
                    comScore++;
                    updateScores(playerScore,comScore);
                    cChoiceImg.src="images/rock.jpg";
                    roundResultTxt.textContent = 'You lose !';
                    break;
                case 'Paper':
                    //player wins
                    playerScore++;
                    updateScores(playerScore,comScore);
                    cChoiceImg.src="images/paper.jpg";
                    roundResultTxt.textContent = 'You win !';
                    break;
                case 'Scissors':
                    //draw
                    cChoiceImg.src="images/scissors.jpg";
                    roundResultTxt.textContent = 'Draw';
                    break;
            }
            pChoiceImg.src = "images/scissors.jpg";
            break;
        default: break;
    }

    if(playerScore >= 5){
        //alert('you win');
        //roundResultTxt.classList.add('gameResultTxt');
        choiceImgs.forEach(choice => choice.classList.add('noDisplay'));
    }
    else if(comScore >= 5){
        //alert('you lose');
        //roundResultTxt.classList.add('gameResultTxt');
        choiceImgs.forEach(choice => choice.classList.add('noDisplay'));
    }
}

//reset game
function reset(){
    playerScore = 0;
    comScore = 0;
    updateScores(playerScore,comScore);
    pChoiceImg.src = "";
    cChoiceImg.src = "";
    roundResultTxt.textContent = "Let's start !";
    choiceImgs.forEach(choice => choice.classList.remove('noDisplay'));
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

