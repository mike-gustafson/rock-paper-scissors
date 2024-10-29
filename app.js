//------------------------------------------------------------------------Begin Variable Declaration

const choices = ['rock','paper','scissors'];

const resultMsgOptions = {
    win: 'You win',
    lose: 'You lose',
    tie: "It's a tie"
};
const resultsObject = {
    rock:{scissors:true, paper:false},
    scissors:{paper:true, rock:false},
    paper:{rock:true, scissors:false}
};

let playerWins = "";
let resultsMsg = "";

let round = 1;
let tiePoints = 0;
let playerPoints = 0;
let computerPoints = 0;
let computerChoice = choices[Math.floor(Math.random()*choices.length)];

const buttonReset = document.querySelector("#reset");
const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const elementResults = document.getElementById("results");
const buttonScissors = document.querySelector("#scissors");

//------------------------------------------------------------------------Begin Function Declarations
// function - Logic for rock paper scissors
function compareChoices(){
    if (playerChoice===computerChoice){                                 // checks for tie
        resultsMsg = resultMsgOptions.tie;                              // assign tie string if round is a tie
        tiePoints++;                                                    // increments counter for tied games
    } else {                                                            // if not a tie
        playerWins = resultsObject[playerChoice][computerChoice];       // set result to boolean value from results object
        if (playerWins){                                                // if result = true (win)
            playerPoints++;                                             // awards player a point
            resultsMsg = resultMsgOptions.win;                          // assign win string
        }else{                                                          // if result = false (loss)
            computerPoints++;                                           // award computer a point
            resultsMsg = resultMsgOptions.lose;                         // assign lose string
        }
    }
    outputToHTML();                                                     // calls outputToHTML function (updates results element)
    round++;                                                            // increments round number
    computerChoice = choices[Math.floor(Math.random()*choices.length)]; // sets new computer choice for next round
}

// function - output results to HTML document in the "results" div
function outputToHTML(){
    elementResults.innerHTML = `
    <h2>Round:${round}</h2>
    <span class="score">Player: ${playerPoints}</span><br>
    You chose ${playerChoice}<span class="tied-games">Tied games: ${tiePoints}</span><br>
    <span class="score">Computer: ${computerPoints}</span><span class="results-message">${resultsMsg}</span><br>
    Computer chose ${computerChoice}`
}

// function - reseet game to starting state
const resetGame = () => {
    round = 1;
    tiePoints=0;
    playerPoints=0;
    computerPoints=0;
    resultsMsg = "";
    playerChoice = "to reset the game";
    computerChoice = "to acquiesce";
    outputToHTML();
}

//------------------------------------------------------------------------Begin User Interaction
buttonRock.addEventListener("click", ()=>{playerChoice=choices[0]; compareChoices()});    // inputs player choice as lapis, runs functions and returns HTML results
buttonPaper.addEventListener("click", ()=>{playerChoice=choices[1]; compareChoices()});   // inputs player choice as papyrus, runs functions and returns HTML results
buttonScissors.addEventListener("click", ()=>{playerChoice=choices[2]; compareChoices()});// inputs player choice as scallpulus, runs functions and returns HTML results
buttonReset.addEventListener("click", resetGame);                                         // resets the game if reset button is clicked