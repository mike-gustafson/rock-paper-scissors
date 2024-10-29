//------------ Variables
const choices = ['rock','paper','scissors'];
const resultMsgOptions = {
    win: 'You win',
    lose: 'You lose',
    tie: "It's a tie"
};
const outcomeMatrix = {
    rock:{scissors:true, paper:false},
    scissors:{paper:true, rock:false},
    paper:{rock:true, scissors:false}
};
let playerWins = "";
let resultMsg = "";
let round = 1;
let tieCount = 0;
let playerScore = 0;
let computerScore = 0;
let computerChoice = choices[Math.floor(Math.random()*choices.length)];

//------------ DOM Elements
const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonReset = document.querySelector("#reset");
const resultsDisplay = document.querySelector("#results");
const buttonScissors = document.querySelector("#scissors");

//------------ Functions
// function - Logic to determin outocme of round
function compareChoices(){
    if (playerChoice===computerChoice){                                // checks for tie
        resultMsg = resultMsgOptions.tie;                              // assign tie string if round is a tie
        tieCount++;                                                    // increments counter for tied games
    } else {                                                           // if not a tie
        playerWins = outcomeMatrix[playerChoice][computerChoice];      // set result to boolean value from results object
        if (playerWins){                                               // if result = true (win)
            playerScore++;                                             // awards player a point
            resultMsg = resultMsgOptions.win;                          // assign win string
        }else{                                                         // if result = false (loss)
            computerScore++;                                           // award computer a point
            resultMsg = resultMsgOptions.lose;                         // assign lose string
        }
    }
    render();                                                          // calls render function (updates results element)
    round++;                                                           // increments round number
    computerChoice = choices[Math.floor(Math.random()*choices.length)];// sets new computer choice for next round
}

// function - output results to HTML document in the "results" div
function render(){
    resultsDisplay.innerHTML = `
    <h2>Round:${round}</h2>
    <span class="score">Player: ${playerScore}</span><br>
    You chose ${playerChoice}<span class="tied-games">Tied games: ${tieCount}</span><br>
    <span class="score">Computer: ${computerScore}</span><span class="results-message">${resultMsg}</span><br>
    Computer chose ${computerChoice}`
}

// function - reset game to starting state
const resetGame = () => {
    round = 1;
    tieCount=0;
    playerScore=0;
    computerScore=0;
    resultMsg = "";
    playerChoice = "to reset the game";
    computerChoice = "to acquiesce";
    render();
}

//------------ Event Listeners
buttonRock.addEventListener("click", ()=>{playerChoice=choices[0]; compareChoices()});    // inputs player choice as lapis, runs functions and returns HTML results
buttonPaper.addEventListener("click", ()=>{playerChoice=choices[1]; compareChoices()});   // inputs player choice as papyrus, runs functions and returns HTML results
buttonScissors.addEventListener("click", ()=>{playerChoice=choices[2]; compareChoices()});// inputs player choice as scallpulus, runs functions and returns HTML results
buttonReset.addEventListener("click", resetGame);                                         // resets the game if reset button is clicked