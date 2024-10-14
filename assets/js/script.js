
/* Love maths/ Tidying up: 
https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+3/courseware/2d651bf3f23e48aeb9b9218871912b2e/04d7bdb98119413991e2a31e9a291970/
Loading events: 
https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LMR101+1/courseware/0a4bf408d10c4149bb686457ac11edf6/fe180c06af614d2f86e32957ae17a859/
Adding event listeners: 
https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LMR101+1/courseware/0a4bf408d10c4149bb686457ac11edf6/fe180c06af614d2f86e32957ae17a859/
*/
/* This eventlistener clears the text input field in the login form, 
 and sets its focus with a ready cursor */
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('user-name').focus();
    document.getElementById('user-name').value = "";
})

/*This event listener select the first form element in the document: 
  https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector,
  and listens for submit, prevents the default submit,
  takes care of the text input validation
  by providing the user with an error message in case of invalid submission,
  or allow user to start a new game after the validation passes.
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
    /* .includes(' ')checks if there is space in the userName: 
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes*/
    if (userName.length > 12 || userName === "" || userName.includes(' ')) {

        // Displays the error message underneath the text input.
        /* Changing existing elements: 
        https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LMR101+1/courseware/0a4bf408d10c4149bb686457ac11edf6/37e3becd93804fdf8bf586523f56ead5/*/
        document.getElementById('error-message').style.display = 'block';

        /* Hides error message after 3000 milliseconds = 3 seconds. 
        https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout
        */
        setTimeout(function () {
            document.getElementById('error-message').style.display = 'none';
        }, 3000); 
        return;
    }

    /* Hides all elements with class 'start-game'; the login phase.
    https://www.tutorialstonight.com/javascript-queryselectorall-foreach?utm_content=cmp-true
    */
    document.querySelectorAll(".start-game").forEach(element => {
        element.style.display = "none";
    });

    // Displays the game phase
    // Show elements with class 'result-display-area'
    document.querySelectorAll(".result-display-area").forEach(element => {
        element.style.display = "flex";
    });

    // Show elements with class 'controls-area'
    document.querySelectorAll(".controls-area").forEach(element => {
        element.style.display = "flex";
    });

    // The user's text input sends to setUser function.
    setUser(userName);
});

/*This event listener listens for a click action on the rules button,
 and calls the gameRules function. */
document.querySelector('.rules').addEventListener('click', gameRules);

/**This function takes the user's name submitted in login phase,
 * and sets it to the span's innerHTML with the #player, displays on top of the user's score in the game phase,
 * and calls the runGame function.
 */
function setUser(user) {
    document.getElementById('player').innerHTML = `${user}'s`;
    runGame();
}

/**
 * This function adds event listeners to the control buttons,
 * decides which button has been clicked,
 * and calls for the functions showUsersChoice and showComputersChoice.
 */
function runGame() {

    // Takes the elements with the .btn and makes the buttons array
    let buttons = document.getElementsByClassName('btn');
    let playerChoice;

    // This for loop adds event listener to the control buttons
    for (let button of buttons) {
        button.addEventListener('click', function () {

            /* This switch-case sends the data-type attribute of the clicked control button
            to the showUserChoice function to be displayed
            and calls the showComputersChoice function as well.*/ 
            /* Switch-case statement: 
            https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LMR101+1/courseware/73e9c0413ead4a21b389e33c77706102/ba023cfa11c04351a3758b21ee4418fe/?child=last
            Love Maths/ creating event listeners:
            https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+3/courseware/2d651bf3f23e48aeb9b9218871912b2e/78f3c10a937c4fe09640c7c0098d16bd/*/
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

/** 
 * This function sets the user's pick of weapon as the innerHTML of #user-pick 
*/
function showUsersChoice(playerChoice) {
    /* Changing existing elements: 
        https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LMR101+1/courseware/0a4bf408d10c4149bb686457ac11edf6/37e3becd93804fdf8bf586523f56ead5/*/
    document.getElementById('user-pick').innerHTML = playerChoice;
}

/** 
 * This function randomly chooses a weapon from the choices array,
 * sets it as the innerHTML of #computer-pick,
 * and calls the showResult function
*/
function showComputersChoice() {
    let choices = ['✊', '✋', '✌️', '🦎', '🖖'];

    // https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LMR101+1/courseware/73e9c0413ead4a21b389e33c77706102/48be8fcda02741f4b784016d5894101c/
    let index = Math.floor(Math.random() * choices.length);

    /* Changing existing elements: 
    https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LMR101+1/courseware/0a4bf408d10c4149bb686457ac11edf6/37e3becd93804fdf8bf586523f56ead5/*/
    document.getElementById('computer-pick').innerHTML = choices[index];
    ShowResult();
}

/**
 * This function counts the user's score
*/
function countUsersScore() {

    // Takes the content of #user-counter, turns it to integer, and assign it to userScore.
    let userScore = parseInt(document.getElementById('user-counter').innerText);

    // Increases the userScore by 1, and sets it as the innerHTML of the #user-counter.
    document.getElementById('user-counter').innerText = ++userScore;
}

/**
 * This function counts the computer's score
*/
function countComputersScore() {
    let computerScore = parseInt(document.getElementById('pc-counter').innerText);
    document.getElementById('pc-counter').innerText = ++computerScore;
}

/**
 * This function displays the text result after each round
 */
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

    // Makes the div with the #text-result visible.
    result.style.display = 'block';

    // Hides all elements with the class controls-area during result display.
    document.querySelectorAll(".controls-area").forEach(element => {
        element.style.display = "none";
    });

    /* If both players pick the same weapon the text result displays "It's a tie" in black color,
    and both user's and computer's score increases by 1.
    */
    if (playerPick === computerPick) {
        result.innerHTML = "It's a tie!";
        result.style.color = 'rgb(3, 3, 14)';
        countUsersScore();
        countComputersScore();

    } else {

        /* If the players don't pick the same weapon,
        this switch-case statement decides who wins the round by checking the different senarios */
        switch (playerPick) {
            case '✊':
                if (computerPick === '🦎') {
                    result.innerHTML = `${options[playerPick]} crushes ${options[computerPick]}.<br>
                    ${player} wins!`;
                    result.style.color = '#00D26A'; // green
                    countUsersScore();
                } else if (computerPick === '✌️') {
                    result.innerHTML = `${options[playerPick]} crushes ${options[computerPick]}.<br> 
                    ${player} wins!`;
                    result.style.color = '#00D26A';
                    countUsersScore();

                } else {
                    result.innerHTML = `${options[computerPick]} beats ${options[playerPick]}.<br> Computer wins!`;
                    result.style.color = 'rgb(255, 0, 17)'; //red
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

    // Shows the text result for 3 seconds and then reset for a new round
    setTimeout(function () {
        // Hides the text result after 3 seconds
        result.style.display = 'none'; 

        // Resets user and computer choices to ✊
        document.getElementById('user-pick').innerHTML = '✊';
        document.getElementById('computer-pick').innerHTML = '✊';

        // Shows control-area again after 3 seconds
        document.querySelectorAll(".controls-area").forEach(element => {
            element.style.display = "flex";
        });
    }, 3000);

}

/** 
 * This function increments the round count untill the round is equal to 7,
 * to call the finalResult function.
 */
function roundCounter() {
    /* Takes the string value in the span with the #round-count, turns it to integer, 
    and assign to myCounter.*/
    let myCounter = parseInt(document.getElementById('round-count').innerText);

    // If the round count is 7, show final result and exit game
    if (myCounter === 7) {
        // Hides all the elements (buttons) with the .control-btn.
        document.querySelectorAll(".control-btn").forEach(element => {
            element.style.display = "none";
        });

        // Sets the innerHTML of the h2 with the #control-area-heading to "Wait to see the final result ..."
        document.getElementById('control-area-heading').innerHTML = "Wait to see the final result ...";

        // Delays the execution of exitGame() by 7 seconds, so that the user have time to read the #control-area-heading.
        setTimeout(function () {
            finalResult(); 
        }, 7000);
    } else if (myCounter < 7) {

        // Increments and updates the round count
        myCounter++;
        document.getElementById('round-count').innerText = myCounter;
    }
}

/**
 * This function handles the display of the game's rules modal, depending on the phase of the game
 * (either the login phase or the game phase). It ensures that the rules cannot be opened during 
 * the result display phase and appropriately shows/hides elements based on the current state.
 * 
 * The function:
 * - Alerts the user if they try to open the rules during result display.
 * - Determines if the rules are being opened from the login phase or the game phase.
 * - Shows the rules box and hides the appropriate elements accordingly.
 * - Sets up event listeners for closing the rules box.
 * 
 * @param {null}
 * @return {void}
 */
function gameRules() {
    let textResult = document.getElementById('text-result');
    let rulesExplain = document.querySelectorAll(".rules-explain");
    let controlsArea = document.querySelectorAll(".controls-area");
    let resultDisplayArea = document.querySelectorAll(".result-display-area");
    let startGame = document.querySelectorAll(".start-game");
    let player = document.getElementById("player").innerHTML;
    let rulesElement = document.querySelector(".rules");

    // A flag is used to distinguish from which phase the user wants to open the rules box. 
    let flag;

    //Checks if the rules button is clicked during the test result display
    if (textResult.style.display === 'block') {

        // Alerts the user that the rules can't be shown during result display
        alert("The rules box can't be opened during the rounds' result display.");

        /*classList:
        https://www.w3schools.com/jsref/prop_element_classlist.asp,
        https://www.javascripttutorial.net/javascript-dom/javascript-classlist/
        */
        // Removes hover effect by adding a class that disables it.
        rulesElement.classList.add("no-hover");
        
        // Resets the hover effect by removing the no-hover class from the list of the rules button classes.
        rulesElement.classList.remove("no-hover");

        // Returns early to prevent the rules box from opening.
        return;
    } else if (player === "") {
        /*Checks if the rules button has been clicked on at login phase before submission, 
        by checking if the span with #player is empty.
        */

        flag = 1; // User is trying to open the rules box from the login phase.

        // Opens the rules box
        rulesExplain.forEach(element => {
            element.style.display = "block";
        });

        // Hides the elements in the login phase during the time the rules box is open.
        startGame.forEach(element => {
            element.style.display = "none";
        });

        
        /* (1)This event listener listens for click action on the close icon in the rules box header.
        Passing an anonymous function to the event listener, 
        to be able to pass the flag as parameter to the event handler.
        https://plainenglish.io/blog/passing-arguments-to-event-listeners-in-javascript-1a81bc397ecb*/ 
        document.querySelector("#close-rules").addEventListener('click', function () {
            closeRules(flag);
        });

         // (2) This event listener listens for keydown action on the close icon in the rules box header.
        document.querySelector("#close-rules").addEventListener("keydown", function (event) {
            // (3) Checks if the pressed key is "Enter", calls the closeRules function.
            if (event.key === "Enter") {
                closeRules(flag);
            }
        });

    } else {
        flag = 2; // User is trying to open the rules box from the game phase.
        
        // Opens the rules box
        rulesExplain.forEach(element => {
            element.style.display = "block";
        });

        // Hides elements with class 'result-display-area'
        resultDisplayArea.forEach(element => {
            element.style.display = "none";
        });

        // Hides elements with class 'controls-area'
        controlsArea.forEach(element => {
            element.style.display = "none";
        });

        //(1)
        document.querySelector("#close-rules").addEventListener('click', function () {
            closeRules(flag)
        });

        // (2)
        document.querySelector("#close-rules").addEventListener("keydown", function (event) {
            // (3)
            if (event.key === "Enter") {
                closeRules(flag);
            }
        });

    }
}

/**
 * This function closes the rules box, 
 * and makes sure the user goes back to the phase they opened the rules box from.
 * @param {number} flag - A number indicating the phase from which the rules box was opened: 
 * 1 for login phase, 2 for game phase.
 */
function closeRules(flag) {
    /*Array.form() converts the NodeList (returned by querySelectorAll()) into a proper array. 
    This allows the use of array methods like .every().
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
    */
    let finalResultDisplay = document.querySelectorAll(".final-result-display");
    let isVisible = Array.from(finalResultDisplay).every(element => element.style.display === "block");

    // Checks if the final result box is visible at the time the user clicks to close the rules box.
    if (isVisible) {
        document.querySelectorAll(".rules-explain").forEach(element => {
            element.style.display = "none";
        });
    } else if (flag === 1) {
        /* When the flag is 1, the user must go back to login phase after closing the rules box. 
        And other phases must be hidden.*/
        document.querySelectorAll(".rules-explain").forEach(element => {
            element.style.display = "none";
        });
        document.querySelectorAll(".result-display-area").forEach(element => {
            element.style.display = "none";
        });
        document.querySelectorAll(".controls-area").forEach(element => {
            element.style.display = "none";
        });
        document.querySelectorAll(".start-game").forEach(element => {
            element.style.display = "flex";
        });
    } else {
        /* When the flag is 2, the user must go back to game phase after closing the rules box, 
        and other phases must be hidden.*/
        document.querySelectorAll(".rules-explain").forEach(element => {
            element.style.display = "none";
        });
        document.querySelectorAll(".start-game").forEach(element => {
            element.style.display = "none";
        });
        document.querySelectorAll(".result-display-area").forEach(element => {
            element.style.display = "flex";
        });
        document.querySelectorAll(".controls-area").forEach(element => {
            element.style.display = "flex";
        });
    }
}

/**
 * This function compares the user score with the computer score and decides the winner,
 * and displays the final result box.
 * It listens for a click action on one of the yes-no buttons.
 */
function finalResult() {
    // Takes the user score from #user-counter as a string and turns it to integer.
    let userScore = parseInt(document.getElementById('user-counter').innerText);

    // Takes the computer score from #pc-counter as a string and turns it to integer.
    let computerScore = parseInt(document.getElementById('pc-counter').innerText);

    // Hides the game phase.
    document.querySelectorAll(".result-display-area").forEach(element => {
        element.style.display = "none";
    });
    document.querySelectorAll(".controls-area").forEach(element => {
        element.style.display = "none";
    });

    // Displays the final result box.
    document.querySelectorAll(".final-result-display").forEach(element => {
        element.style.display = "block";
    });

    // Decides the winner by comparing the scores
    if (userScore === computerScore) {
        document.getElementById('result-report').innerText = "It's a tie!";
        document.getElementById('result-report').style.color = 'rgb(3, 3, 14)'; //black
    } else if (userScore > computerScore) {
        document.getElementById('result-report').innerText = "You win!";
        document.getElementById('result-report').style.color = '#00D26A'; //green
    } else {
        document.getElementById('result-report').innerText = "Computer wins!";
        document.getElementById('result-report').style.color = 'rgb(255, 0, 17)'; //red
    }

    // Makes an array of the elements in .yes-no-buttons and assigns it to buttons.
    let buttons = document.getElementsByClassName('yes-no-buttons');

    // Attaches event listener to each button in buttons array.
    for (let button of buttons) {
       // button.removeEventListener('click', quitContinue); // Prevent duplicate listeners
        button.addEventListener('click', quitContinue); 
    }
}

/**
 * This function checks if the user wants to play again or quit.
 * Resets the game phase and sends the user to the game phase, if the user wants to play again.
 * Reloads the website and sends the user to login phase.
 */
function quitContinue() {
    switch (this.getAttribute('data-type')) {
        case 'yes':
            // Prepares for a new game by resetting the #control-area-heading, players' score and the #text-result.
            document.getElementById('control-area-heading').innerHTML = `Round <span id="round-count">1</span><br>Choose your weapon!`;
            document.getElementById('user-counter').innerText = "0";
            document.getElementById('pc-counter').innerText = "0";
            document.getElementById('text-result').innerHTML = "";

            // Hides the final result display
            document.querySelectorAll(".final-result-display").forEach(element => {
                element.style.display = "none";
            });

            // Makes the game phase sections (elements) visible
            document.querySelectorAll(".result-display-area").forEach(element => {
                element.style.display = "flex";
            });
            document.querySelectorAll(".controls-area").forEach(element => {
                element.style.display = "flex";
            });
            document.querySelectorAll(".control-btn").forEach(element => {
                element.style.display = "grid";
            });

            // Resets the players' pick area back to rock.
            document.getElementById('computer-pick').innerHTML = "✊";
            document.getElementById('user-pick').innerHTML = "✊";
            break;
        case 'no':
            /* Reloads the page or current document.
            https://developer.mozilla.org/en-US/docs/Web/API/Location/reload
            */
            location.reload();
            break;
    }
}