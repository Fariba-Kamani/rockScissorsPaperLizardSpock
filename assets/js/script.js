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

}

function countComputersScore() {

}

function ShowResult() {
    let playerPick = document.getElementById('user-pick').innerHTML;
    let computerPick = document.getElementById('computer-pick').innerHTML;
    let result = document.getElementById('text-result');
    let player = document.getElementById("user-name").value;
    result.style.display = 'block';
    if (playerPick === computerPick) {
        display.innerHTML = "It's a tie!";

    } else {
        switch (playerPick) {
            case '✊':
                if (computerPick === '🤌' || computerPick === '✌️') {
                    result.innerHTML = `${playerPick} crushes ${computerPick}. ${player} wins!`;
                    result.style.color = 'rgb(64, 215, 64)';
                } else {
                    result.innerHTML = 'Computer wins!';
                    result.style.color = 'rgb(255, 0, 17)';

                }
                break;
            case '✋':
                if (computerPick === '✊') {
                    result.innerHTML = `${playerPick} covers ${computerPick}. ${player} wins!`;
                    result.style.color = 'rgb(64, 215, 64)';
                } else if (computerPick === '🖖') {
                    result.innerHTML = `${playerPick} disproves ${computerPick}. ${player} wins!`;
                    result.style.color = 'rgb(64, 215, 64)';

                } else {
                    result.innerHTML = 'Computer wins!';
                    result.style.color = 'rgb(255, 0, 17)';

                }
                break;
            case '✌️':
                if (computerPick === '✋') {
                    result.innerHTML = `${playerPick} cuts ${computerPick}. ${player} wins!`;
                    result.style.color = 'rgb(64, 215, 64)';
                } else if (computerPick === '🤌') {
                    result.innerHTML = `${playerPick} dicapitates ${computerPick}. ${player} wins!`;
                    result.style.color = 'rgb(64, 215, 64)';

                } else {
                    result.innerHTML = 'Computer wins!';
                    result.style.color = 'rgb(255, 0, 17)';

                }
                break;
            case '🤌':
                if (computerPick === '🖖') {
                    result.innerHTML = `${playerPick} poisons ${computerPick}. ${player} wins!`;
                    result.style.color = 'rgb(64, 215, 64)';
                } else if (computerPick === '✋') {
                    result.innerHTML = `${playerPick} eats ${computerPick}. ${player} wins!`;
                    result.style.color = 'rgb(64, 215, 64)';

                } else {
                    result.innerHTML = 'Computer wins!';
                    result.style.color = 'rgb(255, 0, 17)';

                }
                break;
            case '🖖':
                if (computerPick === '✊') {
                    result.innerHTML = `${playerPick} vaporizes ${computerPick}. ${player} wins!`;
                    result.style.color = 'rgb(64, 215, 64)';
                } else if (computerPick === '✌️') {
                    result.innerHTML = `${playerPick} smashes ${computerPick}. ${player} wins!`;
                    result.style.color = 'rgb(64, 215, 64)';

                } else {
                    result.innerHTML = 'Computer wins!';
                    result.style.color = 'rgb(255, 0, 17)';

                }
                break;

        }
    }

}

function gameRules() {

}

function exitGame() {

}