

//Storing the values we need in variables listed here
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerSelection() {
    const possibleOutcomes = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return possibleOutcomes[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(user) + " beats " + convertToWord(computer) + ". You Win!";
}

function lose(user, computer) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(computer) + " beats " + convertToWord(user) + ". You Lose!";
}

function draw(user, computer) {
    result_div.innerHTML = convertToWord(user) + " is the same as " + convertToWord(computer);
}

function game(playerSelection){
    const computerSelection = getComputerSelection();
    switch(playerSelection + computerSelection) {
        case "rs":
        case "pr":
        case "sp":
            win(playerSelection, computerSelection);
            break;
        case "rp":
        case "ps":
        case "sr":  
            lose(playerSelection, computerSelection);
            break;      
        case "rr":
        case "pp":
        case "ss": 
            draw(playerSelection, computerSelection);
            break; 
    }
    
}

function main() {

    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })
}

main();
