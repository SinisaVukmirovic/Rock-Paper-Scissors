    //  caching the DOM (storring something for future use)
let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');

const scoreBoard_div = document.querySelector('.score-beard');
const result_p = document.querySelector('.result > p');

const rock_span = document.getElementById('r');
const paper_span = document.getElementById('p');
const scissors_span = document.getElementById('s');

//  computer randoming choice function
function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function conwertToWord(letter) {
    if(letter === 'r') return "Rock";
    if(letter === 'p') return "Paper";
    return "Scissors";
}

function win(user, comp) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;

    result_p.innerHTML = `${conwertToWord(user)} beats ${conwertToWord(comp)}. You WIN!`;
}

function lose(user, comp) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;

    result_p.innerHTML = `${conwertToWord(user)} loses to ${conwertToWord(comp)}. You lose!`;
}

function draw(user, comp) {
    result_p.innerHTML = `${conwertToWord(user)} equals ${conwertToWord(comp)}. It's a draw!`;
}

function game(userChoice) {
    const compChoice = getCompChoice();
    
    switch (userChoice + compChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, compChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, compChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, compChoice);
            break;
    }
}

function main() {
    //  adding event listeners for each choice/button
    rock_span.addEventListener('click', () => game('r'));

    paper_span.addEventListener('click', () => game('p'));

    scissors_span.addEventListener('click', () => game('s'));
}

main();