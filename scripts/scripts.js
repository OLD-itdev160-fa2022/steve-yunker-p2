
//generates a random number
let randomNum = Math.floor(Math.random() * 100) + 1;

//variables for injecting data and reading in guesses
const enterGuess = document.querySelector('.enterGuess');
const hint = document.querySelector('.hint');
const previousGuesses = document.querySelector('.previousGuesses');
const result = document.querySelector('.result');
const guess = document.querySelector('.guess');


let guessCount = 1;
let reset;

//event to handle submitting guesses
enterGuess.addEventListener('click', game);

//game function that takes the user guesses, injects guesses/hints and calculates win/loss
function game(){
    let userGuess = Number(guess.value)
    if (guessCount === 1){
    previousGuesses.textContent = 'Previous Guesses: ';
    }
    previousGuesses.textContent += userGuess + ' ';

    if (userGuess === randomNum) {
        result.textContent = 'Congrats, you win!!!'
        hint.textContent = ''
        gameOver();
    } else if (guessCount === 10){
        result.textContent = 'You used up your guesses, better luck next time!'
        hint.textContent = ''
        gameOver();
    } else {
        result.textContent = 'Wrong!!!'
     if (userGuess < randomNum) {
        hint.textContent = 'Your guess is too low!'
    } else if (userGuess > randomNum) {
        hint.textContent = 'Your guess is too high!'
    }
    }
    guessCount++
    guess.textContent = ''
}
//function to end the game, disable button, and inject a start over button 
function gameOver(){
    guess.disabled = true;
    enterGuess.disabled = true;
    reset = document.createElement('button');
    reset.textContent = 'start new game';
    document.body.appendChild(reset);
    reset.addEventListener('click', resetGame);
    
}
//function to reset game and data 
function resetGame(){
    guessCount = 1;
    const resetBoard = document.querySelectorAll('.results p');
    for (let i = 0; i < resetBoard.length; i++){
        resetBoard[i].textContent = '';
    }
    reset.parentNode.removeChild(reset);
    guess.disabled = false;
    enterGuess.disabled = false;
    guess.value = '';
    randomNum = Math.floor(Math.random() * 100) + 1;
}

