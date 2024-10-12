
/*Love maths/ Tidying up: https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+3/courseware/2d651bf3f23e48aeb9b9218871912b2e/04d7bdb98119413991e2a31e9a291970/
Loading events: https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LMR101+1/courseware/0a4bf408d10c4149bb686457ac11edf6/fe180c06af614d2f86e32957ae17a859/
Adding event listeners: https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LMR101+1/courseware/0a4bf408d10c4149bb686457ac11edf6/fe180c06af614d2f86e32957ae17a859/
*/
/** 
 * This eventlistener clears the text input field in the login form, 
 * and sets its focus with a ready cursor
 */
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('user-name').focus();
    document.getElementById('user-name').value = "";
})

/**This event listener prevents the default submit,
 * and takes care of the text input validation
 * by providing the user with an error message in case of invalid submission,
 * or allow user to start a new game after the validation passes.
 */
document.querySelector('form').addEventListener('submit', function (event) {
    // Prevents default submission
    /* Form submission: 
    https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LMR101+1/courseware/0a4bf408d10c4149bb686457ac11edf6/16d62f1111064f5cb6a64582da96a41b/*/
    event.preventDefault();
    // Gets the text input value
    /* Getting form values:
    https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LMR101+1/courseware/0a4bf408d10c4149bb686457ac11edf6/16d62f1111064f5cb6a64582da96a41b/*/ 
    let userName = document.getElementById("user-name").value;

    // Text input validation
    if (userName.length > 12 || userName === "" || userName.includes(' ')) {
        // Displays the error message underneath the text input.
        /* Changing existing elements: 
        https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LMR101+1/courseware/0a4bf408d10c4149bb686457ac11edf6/37e3becd93804fdf8bf586523f56ead5/*/
        document.getElementById('error-message').style.display = 'block';
        /* Hide error message after 3 seconds. 
        https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout
        */
        setTimeout(function () {
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

document.querySelector('.rules').addEventListener('click', gameRules);

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
            }
        });

    }
}

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

    // Show the result for 3 seconds and then reset
    setTimeout(function () {
        result.style.display = 'none'; // Hide result after 3 seconds


        // Reset user and computer choices to ✊
        document.getElementById('user-pick').innerHTML = '✊';
        document.getElementById('computer-pick').innerHTML = '✊';

        // Show control-area again after 3 seconds
        document.querySelectorAll(".controls-area").forEach(element => {
            element.style.display = "flex";
        });
    }, 3000); // 3 seconds delay 

}

function roundCounter() {
    let myCounter = parseInt(document.getElementById('round-count').innerText);

    // If the round count reaches 7, show final result and exit game
    if (myCounter === 7) {
        document.querySelectorAll(".control-btn").forEach(element => {
            element.style.display = "none";
        });
        document.getElementById('control-area-heading').innerHTML = "Wait to see the final result ...";
        // Delay the execution of exitGame() by 6 seconds (3000 milliseconds)
        setTimeout(function () {
            exitGame(); // Exit game after a delay
        }, 7000);
    } else if (myCounter < 7) {
        // Increment and update the round count
        myCounter++;
        document.getElementById('round-count').innerText = myCounter;
    }
}

function gameRules() {
    let textResult = document.getElementById('text-result');
    let rulesExplain = document.querySelectorAll(".rules-explain");
    let controlsArea = document.querySelectorAll(".controls-area");
    let resultDisplayArea = document.querySelectorAll(".result-display-area");
    let startGame = document.querySelectorAll(".start-game");
    let flag;
    let player = document.getElementById("player").innerHTML;
    let rulesElement = document.querySelector(".rules");

    // Text input validation

    //1- for if rules clicked during result display
    // Check if the result is currently being displayed
    if (textResult.style.display === 'block') {
        // Alert the user that the rules can't be shown during result display
        alert("The rules can't be shown while the result is displayed.");
        // Remove hover effect by adding a class that disables it
        rulesElement.classList.add("no-hover");
        // Reset hover effect
        rulesElement.classList.remove("no-hover");
        // Return early to prevent the rules from being shown
        return;
    } else if (player === "") {
        //for if the rules clicked from login
        flag = 1;
        rulesExplain.forEach(element => {
            element.style.display = "block";
        });
        startGame.forEach(element => {
            element.style.display = "none";
        });

        document.querySelector("#close-rules").addEventListener('click', function () {
            closeRules(flag);
        });
        document.querySelector("#close-rules").addEventListener("keydown", function (event) {
            // Check if the pressed key is "Enter"
            if (event.key === "Enter") {
                closeRules(flag);
            }
        });

    } else {
        flag = 2;
        //for if rules clicked from game section
        rulesExplain.forEach(element => {
            element.style.display = "block";
        });
        resultDisplayArea.forEach(element => {
            element.style.display = "none";
        });

        // Hide elements with class 'controls-area'
        controlsArea.forEach(element => {
            element.style.display = "none";
        });

        // Event listener for closing the rules section
        document.querySelector("#close-rules").addEventListener('click', function () {
            closeRules(flag)
        });
        document.querySelector("#close-rules").addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                closeRules(flag);
            }
        });

    }
}

function closeRules(flag) {
    let endGameElements = document.querySelectorAll(".end-game");

    // Check if all elements are hidden
    let isVisible = Array.from(endGameElements).every(element => element.style.display === "block");
    if (isVisible) {
        document.querySelectorAll(".rules-explain").forEach(element => {
            element.style.display = "none";
        });

    } else if (flag === 1) {
        document.querySelectorAll(".rules-explain").forEach(element => {
            element.style.display = "none";
        });
        document.querySelectorAll(".result-display-area").forEach(element => {
            element.style.display = "none";
        });

        // Show elements with class 'controls-area'
        document.querySelectorAll(".controls-area").forEach(element => {
            element.style.display = "none";
        });
        document.querySelectorAll(".start-game").forEach(element => {
            element.style.display = "flex";
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

    if (userScore === computerScore) {
        document.getElementById('round-result').innerText = "It's a tie!";
        document.getElementById('round-result').style.color = 'rgb(3, 3, 14)';
    } else if (userScore > computerScore) {
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
    document.getElementById('control-area-heading').innerHTML = `Round <span id="round-count">1</span><br>Choose your weapon!`;
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
                element.style.display = "grid";
            });

            document.getElementById('computer-pick').innerHTML = "✊";
            document.getElementById('user-pick').innerHTML = "✊";
            break;
        case 'no':
            location.reload(true);
            break;
    }
}