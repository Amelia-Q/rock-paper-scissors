/*
function computerPlay() {
   
    let computerNumber = Math.floor(Math.random() * 3) + 1;
   let computerOutput = "";

   if (computerNumber == 1) {
       computerOutput = "rock";
   } else if (computerNumber == 2) {
       computerOutput = "paper";
   } else {
       computerOutput = "scissors";
   }
return(computerOutput);
   }

  

// let playerSelection = prompt('Rock, paper or scissors?').toLowerCase();
// console.log(playerSelection);
let playerSelection = '';
let computerSelection = computerPlay();
console.log(computerSelection);
let playerCounter = 0;
let computerCounter = 0;

let result = "";

function playRound() {
   
    

    if ((playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection);
        playerCounter += 1;
    } else if (playerSelection == computerSelection) {
        result = ("It's a tie!")
    } else {
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection);
        computerCounter += 1;
    };


    return result;
    
}


console.log(playRound(playerSelection, computerSelection));
console.log(playerCounter);
console.log(computerCounter);

function game() {
    playRound(playerSelection, computerSelection);
    if (playerCounter >= 5 && computerCounter < 5) {
        return ('Game over, you win!');
    } else if (computerCounter >= 5 && playerCounter < 5) {
        return ('Game over, you lose!');
    } else {
        return ('Keep going');
    }
};

*/

function computerPlay() {
   let computerNumber = Math.floor(Math.random() * 3) + 1;
   let computerOutput = "";

   if (computerNumber == 1) {
       computerOutput = "rock";
   } else if (computerNumber == 2) {
       computerOutput = "paper";
   } else {
       computerOutput = "scissors";
   }
return(computerOutput);
   };


let result;
let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection);
        playerScore += 1;
    } else if (playerSelection == computerSelection) {
        result = ("It's a tie!")
    } else {
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection);
        computerScore += 1;
    }

    if (playerScore >= 5 || computerScore >= 5) {
        //score.removeChild('result');
        gameEnd();
        //playerScore = 0;
        //computerScore = 0;
        
    }
    document.querySelector('.scoreNumbers p').textContent = `${playerScore} - ${computerScore}`;
    document.querySelector('.result').textContent = result.toUpperCase();
}

//console.log(result);

function gameEnd() {
    

    const gameWinner = document.createElement('div');
    gameWinner.classList.add('gameWinner');
    const score = document.querySelector('#score');
    score.appendChild(gameWinner);

    if (playerScore >= 5) {
        gameWinner.textContent = `GAME OVER! YOU WON WITH ${playerScore} POINTS TO ${computerScore}`
    }

    if (computerScore >= 5) {
        gameWinner.textContent = `GAME OVER! YOU LOST WITH ${playerScore} POINTS TO ${computerScore}`
    }

    

    const playAgain = document.createElement('button');
    playAgain.classList.add('playAgain');
    score.appendChild(playAgain);
    playAgain.textContent = 'PLAY AGAIN';
    playAgain.addEventListener('click', () => window.location.reload());

    /*
    const rpsButtons = document.querySelectorAll('.rpsButtons');
    rpsButtons.forEach((rpsButton) => {
        rpsButton.disabled = true;
    })

    */
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
    
};


document.getElementById('rock').addEventListener("click", function() {
    playRound('rock', computerPlay());
})

document.getElementById('paper').addEventListener("click", function() {
    playRound('paper', computerPlay());
})

document.getElementById('scissors').addEventListener("click", function() {
    playRound('scissors', computerPlay());
})





