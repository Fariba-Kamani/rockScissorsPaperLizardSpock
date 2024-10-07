
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('user-name').focus();
    document.getElementById('user-name').value = "";
})
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    let userName = document.getElementById("user-name").value;

    // Text input validation
    if(userName.length > 12 || userName === "" || userName.includes(' ')) {
        document.getElementById('error-message').style.display = 'block';
        // Hide error message after 3 seconds
        setTimeout(function() {
            document.getElementById('error-message').style.display = 'none';
        }, 3000); // 3000 milliseconds = 3 seconds
        return;
    }
    // Hide elements with class 'start-game'
    document.querySelectorAll(".start-game").forEach(element => {
        element.style.display = "none";
    });
    // Show elements with class 'result-display-area'
    document.querySelectorAll(".result-display-area").forEach(element => {
        element.style.display = "flex";
    });

    // Show elements with class 'controls-area'
    document.querySelectorAll(".controls-area").forEach(element => {
        element.style.display = "flex";
    });
    
    setUser(userName);
    
});

document.querySelector('.rules').addEventListener('click', gameRules1);

function setUser(user) {
    document.getElementById('player').innerHTML = `${user}'s`;
    runGame();

}

function runGame() {
   
    // Add an event listener to button elements
    let buttons = document.getElementsByTagName('button');
    let playerChoice;
    for (let button of buttons) {
        button.addEventListener('click', function () {
            switch (this.getAttribute('data-type')) {
                case '✊':
                    playerChoice = this.getAttribute('data-type');
                    showUsersChoice(playerChoice);
                    showComputersChoice();
                    break;
                case '✋':
                    playerChoice = this.getAttribute('data-type');
                    showUsersChoice(playerChoice);
                    showComputersChoice();
                    break;
                case '✌️':
                    playerChoice = this.getAttribute('data-type');
                    showUsersChoice(playerChoice);
                    showComputersChoice();
                    break;
                case '🦎':
                    playerChoice = this.getAttribute('data-type');
                    showUsersChoice(playerChoice);
                    showComputersChoice();
                    break;
                case '🖖':
                    playerChoice = this.getAttribute('data-type');
                    showUsersChoice(playerChoice);
                    showComputersChoice();
                    break;
                case 'rules':
                    gameRules2();
                    break;
            }
    });

}}

function showUsersChoice(playerChoice) {
    document.getElementById('user-pick').innerHTML = playerChoice;
}

function showComputersChoice() {
    let choices = ['✊', '✋', '✌️', '🦎', '🖖'];
    let index = Math.floor(Math.random() * choices.length);
    document.getElementById('computer-pick').innerHTML = choices[index];
    ShowResult();

}

function countUsersScore() {
    let userScore = parseInt(document.getElementById('user-counter').innerText);
    document.getElementById('user-counter').innerText = ++userScore;
    

}

function countComputersScore() {
    let computerScore = parseInt(document.getElementById('pc-counter').innerText);
    document.getElementById('pc-counter').innerText = ++computerScore;
    

}

function ShowResult() {
    let options = {
        '✊': 'rock',
        '✋': 'paper',
        '✌️': 'scissors',
        '🦎': 'lizard',
        '🖖': 'spock',
    };

    let playerPick = document.getElementById('user-pick').innerHTML;
    let computerPick = document.getElementById('computer-pick').innerHTML;
    let result = document.getElementById('text-result');
    let player = document.getElementById("user-name").value;
    result.style.display = 'block';

     // Hide the control-area-heading during result display
     document.querySelectorAll(".controls-area").forEach(element => {
        element.style.display = "none";
    });

    if (playerPick === computerPick) {
        result.innerHTML = "It's a tie!";
        result.style.color = 'rgb(3, 3, 14)';
        countUsersScore();
        countComputersScore();

    } else {
        switch (playerPick) {
            case '✊':
                if (computerPick === '🦎') {
                    result.innerHTML = `${options[playerPick]} crushes ${options[computerPick]}.<br>
                    ${player} wins!`;
                    result.style.color = '#00D26A';
                    countUsersScore();
                } else if (computerPick === '✌️') {
                    result.innerHTML = `${options[playerPick]} crushes ${options[computerPick]}.<br> 
                    ${player} wins!`;
                    result.style.color = '#00D26A';
                    countUsersScore();

                } else {
                    result.innerHTML = `${options[computerPick]} beats ${options[playerPick]}.<br> Computer wins!`;
                    result.style.color = 'rgb(255, 0, 17)';
                    countComputersScore();

                }
                break;
            case '✋':
                if (computerPick === '✊') {
                    result.innerHTML = `${options[playerPick]} covers ${options[computerPick]}.<br> 
                    ${player} wins!`;
                    result.style.color = '#00D26A';
                    countUsersScore();
                } else if (computerPick === '🖖') {
                    result.innerHTML = `${options[playerPick]} disproves ${options[computerPick]}.<br> 
                    ${player} wins!`;
                    result.style.color = '#00D26A';
                    countUsersScore();

                } else {
                    result.innerHTML = `${options[computerPick]} beats ${options[playerPick]}.<br> Computer wins!`;
                    result.style.color = 'rgb(255, 0, 17)';
                    countComputersScore();

                }
                break;
            case '✌️':
                if (computerPick === '✋') {
                    result.innerHTML = `${options[playerPick]} cut ${options[computerPick]}.<br> 
                    ${player} wins!`;
                    result.style.color = '#00D26A';
                    countUsersScore();
                } else if (computerPick === '🦎') {
                    result.innerHTML = `${options[playerPick]} decapitate ${options[computerPick]}.<br> 
                    ${player} wins!`;
                    result.style.color = '#00D26A';
                    countUsersScore();

                } else {
                    result.innerHTML = `${options[computerPick]} beats ${options[playerPick]}.<br> Computer wins!`;
                    result.style.color = 'rgb(255, 0, 17)';
                    countComputersScore();

                }
                break;
            case '🦎':
                if (computerPick === '🖖') {
                    result.innerHTML = `${options[playerPick]} poisons ${options[computerPick]}.<br> 
                    ${player} wins!`;
                    result.style.color = '#00D26A';
                    countUsersScore();
                } else if (computerPick === '✋') {
                    result.innerHTML = `${options[playerPick]} eats ${options[computerPick]}.<br> 
                    ${player} wins!`;
                    result.style.color = '#00D26A';
                    countUsersScore();

                } else {
                    result.innerHTML = `${options[computerPick]} beats ${options[playerPick]}.<br> Computer wins!`;
                    result.style.color = 'rgb(255, 0, 17)';
                    countComputersScore();

                }
                break;
            case '🖖':
                if (computerPick === '✊') {
                    result.innerHTML = `${options[playerPick]} vaporizes ${options[computerPick]}.<br>
                    ${player} wins!`;
                    result.style.color = '#00D26A';
                    countUsersScore();
                } else if (computerPick === '✌️') {
                    result.innerHTML = `${options[playerPick]} smashes ${options[computerPick]}.<br>
                    ${player} wins!`;
                    result.style.color = '#00D26A';
                    countUsersScore();

                } else {
                    result.innerHTML = `${options[computerPick]} beats ${options[playerPick]}.<br> Computer wins!`;
                    result.style.color = 'rgb(255, 0, 17)';
                    countComputersScore();

                }
                break;

        }
        
    }
    roundCounter();  
    document.querySelectorAll(".rules").forEach(element => {
        element.style.color = "#e2f5e2";
    });
     // Show the result for 3 seconds and then reset
    setTimeout(function () {
        result.style.display = 'none';  // Hide result after 3 seconds
        document.querySelectorAll(".rules").forEach(element => {
            element.style.color = "#00D26A";
        });

        // Reset user and computer choices to ✊
        document.getElementById('user-pick').innerHTML = '✊';
        document.getElementById('computer-pick').innerHTML = '✊';

        // Show control-area again after 3 seconds
        document.querySelectorAll(".controls-area").forEach(element => {
            element.style.display = "flex";
        });
    }, 3000);  // 3 seconds delay 

}

function roundCounter() {
    let myCounter = parseInt(document.getElementById('round-count').innerText);
    
    // If the round count reaches 7, show final result and exit game
    if (myCounter === 7) {
        document.querySelectorAll(".control-btn").forEach(element => {
            element.style.display = "none";});
        document.getElementById('control-area-heading').innerHTML = "Wait to see the final result ...";
         // Delay the execution of exitGame() by 6 seconds (3000 milliseconds)
         setTimeout(function() {
            exitGame();  // Exit game after a delay
        }, 7000);
    } else if (myCounter < 7) {
        // Increment and update the round count
        myCounter++;
        document.getElementById('round-count').innerText = myCounter;
    } 
}

function gameRules1() {
    document.querySelectorAll(".rules-explain").forEach(element => {
        element.style.display = "block";
    });
    document.querySelectorAll(".start-game").forEach(element => {
        element.style.display = "none";
    });

    document.querySelector("#close-rules").addEventListener('click', closeRules1);
    document.querySelector("#close-rules").addEventListener("keydown", function(event) {
        // Check if the pressed key is "Enter"
        if (event.key === "Enter") {
          closeRules1();
        }
      }); 
    }

// Separate function to show the rules, reused in both conditions
function gameRules2() {
    document.querySelectorAll(".rules-explain").forEach(element => {
        element.style.display = "block";
    });
    document.querySelectorAll(".result-display-area").forEach(element => {
        element.style.display = "none";
    });

    // Hide elements with class 'controls-area'
    document.querySelectorAll(".controls-area").forEach(element => {
        element.style.display = "none";
    });

    // Event listener for closing the rules section
    document.querySelector("#close-rules").addEventListener('click', closeRules2);
    document.querySelector("#close-rules").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            closeRules2();
        }
    });
}

    function closeRules1() {
        let endGameElements = document.querySelectorAll(".end-game");
    
        // Check if all elements are hidden
        let isVisible = Array.from(endGameElements).every(element => element.style.display === "block");
        if(isVisible) {
            document.querySelectorAll(".rules-explain").forEach(element => {
                element.style.display = "none";
            });
    
        } else {
        document.querySelectorAll(".rules-explain").forEach(element => {
            element.style.display = "none";
        });
        document.querySelectorAll(".start-game").forEach(element => {
            element.style.display = "flex";
        });
    }
    
    }

function closeRules2() {
    let endGameElements = document.querySelectorAll(".end-game");

    // Check if all elements are hidden
    let isVisible = Array.from(endGameElements).every(element => element.style.display === "block");
    if(isVisible) {
        document.querySelectorAll(".rules-explain").forEach(element => {
            element.style.display = "none";
        });

    } else {
    document.querySelectorAll(".rules-explain").forEach(element => {
        element.style.display = "none";
    });
    document.querySelectorAll(".start-game").forEach(element => {
        element.style.display = "none";
    });
    document.querySelectorAll(".result-display-area").forEach(element => {
        element.style.display = "flex";
    });

    // Show elements with class 'controls-area'
    document.querySelectorAll(".controls-area").forEach(element => {
        element.style.display = "flex";
    });
}

}

function exitGame() {
    let userScore = parseInt(document.getElementById('user-counter').innerText);
    let computerScore = parseInt(document.getElementById('pc-counter').innerText);
    document.querySelectorAll(".result-display-area").forEach(element => {
        element.style.display = "none";
    });

    document.querySelectorAll(".controls-area").forEach(element => {
        element.style.display = "none";
    });

    document.querySelectorAll(".end-game").forEach(element => {
        element.style.display = "block";
    });

    if(userScore === computerScore) {
       document.getElementById('round-result').innerText = "It's a tie!";
       document.getElementById('round-result').style.color = 'rgb(3, 3, 14)';
    } else if(userScore > computerScore) {
        document.getElementById('round-result').innerText = "You win!";
        document.getElementById('round-result').style.color = '#00D26A';
    } else {
        document.getElementById('round-result').innerText = "Computer wins!";
        document.getElementById('round-result').style.color = 'rgb(255, 0, 17)';
    }
    let buttons = document.getElementsByClassName('yes-no-buttons');
        for (let button of buttons) {
            button.removeEventListener('click', quitContinue); // Prevent duplicate listeners
            button.addEventListener('click', quitContinue); // Attach event listener
        } 
}

function quitContinue() {
    document.getElementById('control-area-heading').innerHTML =`Round <span id="round-count">1</span><br>Choose your weapon!`;
    document.getElementById('user-counter').innerText = "0";
    document.getElementById('pc-counter').innerText = "0";
    document.getElementById('text-result').innerHTML = "";
    switch (this.getAttribute('data-type')) {
        case 'yes':
            document.querySelectorAll(".end-game").forEach(element => {
                element.style.display = "none";
            });
            document.querySelectorAll(".result-display-area").forEach(element => {
                element.style.display = "flex";
            });
        
            document.querySelectorAll(".controls-area").forEach(element => {
                element.style.display = "flex";
            });

            document.querySelectorAll(".control-btn").forEach(element => {
                element.style.display = "grid";});

            document.getElementById('computer-pick').innerHTML = "✊";
            document.getElementById('user-pick').innerHTML = "✊";
            break;
        case 'no':
           location.reload(true);
            break;
        }


}