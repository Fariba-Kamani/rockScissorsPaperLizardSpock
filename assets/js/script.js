document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    let userName = document.getElementById("user-name").value;

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
    runGame(userName);
});

function runGame(user) {
    document.getElementById('player').innerHTML = `${user}'s`;
    // Add an event listener to elements with the class 'control-btn'
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
                case '🤌':
                    playerChoice = this.getAttribute('data-type');
                    showUsersChoice(playerChoice);
                    showComputersChoice();
                    break;
                case '🖖':
                    playerChoice = this.getAttribute('data-type');
                    showUsersChoice(playerChoice);
                    showComputersChoice();
                    break;
                default:
                    playerChoice = this.getAttribute('data-type');
                    alert(playerChoice);

            }
        });
    }

}

function showUsersChoice(playerChoice) {
    document.getElementById('user-pick').innerHTML = playerChoice;




}

function showComputersChoice() {
    let choices = ['✊', '✋', '✌️', '🤌', '🖖'];
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
    let playerPick = document.getElementById('user-pick').innerHTML;
    let computerPick = document.getElementById('computer-pick').innerHTML;
    let result = document.getElementById('text-result');
    let player = document.getElementById("user-name").value;
    result.style.display = 'block';
    document.getElementById('control-area-heading').style.display = 'none';
    if (playerPick === computerPick) {
        result.innerHTML = "It's a tie!";
        result.style.color = 'rgb(3, 3, 14)';
        countUsersScore();
        countComputersScore();

    } else {
        switch (playerPick) {
            case '✊':
                if (computerPick === '🤌') {
                    result.innerHTML = `Rock crushes lizard.<br>
                    ${player} wins!`;
                    result.style.color = 'rgb(64, 215, 64)';
                    countUsersScore();
                } else if(computerPick === '✌️'){
                    result.innerHTML = `Rock crushes scissors.<br> 
                    ${player} wins!`;
                    result.style.color = 'rgb(64, 215, 64)';
                    countUsersScore();

                } else {
                    result.innerHTML = 'Computer wins!';
                    result.style.color = 'rgb(255, 0, 17)';
                    countComputersScore();

                }
                break;
            case '✋':
                if (computerPick === '✊') {
                    result.innerHTML = `Paper covers rock.<br> 
                    ${player} wins!`;
                    result.style.color = 'rgb(64, 215, 64)';
                    countUsersScore();
                } else if (computerPick === '🖖') {
                    result.innerHTML = `Paper disproves spock.<br> 
                    ${player} wins!`;
                    result.style.color = 'rgb(64, 215, 64)';
                    countUsersScore();

                } else {
                    result.innerHTML = 'Computer wins!';
                    result.style.color = 'rgb(255, 0, 17)';
                    countComputersScore();

                }
                break;
            case '✌️':
                if (computerPick === '✋') {
                    result.innerHTML = `scissors cuts paper.<br> 
                    ${player} wins!`;
                    result.style.color = 'rgb(64, 215, 64)';
                    countUsersScore();
                } else if (computerPick === '🤌') {
                    result.innerHTML = `Scissors dicapitates lizard.<br> 
                    ${player} wins!`;
                    result.style.color = 'rgb(64, 215, 64)';
                    countUsersScore();

                } else {
                    result.innerHTML = 'Computer wins!';
                    result.style.color = 'rgb(255, 0, 17)';
                    countComputersScore();

                }
                break;
            case '🤌':
                if (computerPick === '🖖') {
                    result.innerHTML = `Lizard poisons spock.<br> 
                    ${player} wins!`;
                    result.style.color = 'rgb(64, 215, 64)';
                    countUsersScore();
                } else if (computerPick === '✋') {
                    result.innerHTML = `Lizard eats paper.<br> 
                    ${player} wins!`;
                    result.style.color = 'rgb(64, 215, 64)';
                    countUsersScore();

                } else {
                    result.innerHTML = 'Computer wins!';
                    result.style.color = 'rgb(255, 0, 17)';
                    countComputersScore();

                }
                break;
            case '🖖':
                if (computerPick === '✊') {
                    result.innerHTML = `Spock vaporizes rock.<br>
                    ${player} wins!`;
                    result.style.color = 'rgb(64, 215, 64)';
                    countUsersScore();
                } else if (computerPick === '✌️') {
                    result.innerHTML = `Spock smashes scissors.<br>
                    ${player} wins!`;
                    result.style.color = 'rgb(64, 215, 64)';
                    countUsersScore();

                } else {
                    result.innerHTML = 'Computer wins!';
                    result.style.color = 'rgb(255, 0, 17)';
                    countComputersScore();

                }
                break;

        }
    }

}

function gameRules() {

}

function exitGame() {

}