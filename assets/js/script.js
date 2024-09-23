
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

document.querySelector('.rules').addEventListener('click', gameRules1);

function runGame(user) {
    document.getElementById('player').innerHTML = `${user}'s`;
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
                case 'rules':
                    gameRules2();
                    break;
                    

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
    let options = {
        '✊': 'rock',
        '✋': 'paper',
        '✌️': 'scissors',
        '🤌': 'lizard',
        '🖖': 'spock',
    };

    let playerPick = document.getElementById('user-pick').innerHTML;
    let computerPick = document.getElementById('computer-pick').innerHTML;
    let result = document.getElementById('text-result');
    let player = document.getElementById("user-name").value;
    result.style.display = 'block';
    document.getElementById('control-area-heading').style.display = 'none';
    console.log(options[playerPick]);

    if (playerPick === computerPick) {
        result.innerHTML = "It's a tie!";
        result.style.color = 'rgb(3, 3, 14)';
        countUsersScore();
        countComputersScore();

    } else {
        switch (playerPick) {
            case '✊':
                if (computerPick === '🤌') {
                    result.innerHTML = `${options[playerPick]} crushes ${options[computerPick]}.<br>
                    ${player} wins!`;
                    result.style.color = 'rgb(64, 215, 64)';
                    countUsersScore();
                } else if (computerPick === '✌️') {
                    result.innerHTML = `${options[playerPick]} crushes ${options[computerPick]}.<br> 
                    ${player} wins!`;
                    result.style.color = 'rgb(64, 215, 64)';
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
                    result.style.color = 'rgb(64, 215, 64)';
                    countUsersScore();
                } else if (computerPick === '🖖') {
                    result.innerHTML = `${options[playerPick]} disproves ${options[computerPick]}.<br> 
                    ${player} wins!`;
                    result.style.color = 'rgb(64, 215, 64)';
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
                    result.style.color = 'rgb(64, 215, 64)';
                    countUsersScore();
                } else if (computerPick === '🤌') {
                    result.innerHTML = `${options[playerPick]} dicapitate ${options[computerPick]}.<br> 
                    ${player} wins!`;
                    result.style.color = 'rgb(64, 215, 64)';
                    countUsersScore();

                } else {
                    result.innerHTML = `${options[computerPick]} beats ${options[playerPick]}.<br> Computer wins!`;
                    result.style.color = 'rgb(255, 0, 17)';
                    countComputersScore();

                }
                break;
            case '🤌':
                if (computerPick === '🖖') {
                    result.innerHTML = `${options[playerPick]} poisons ${options[computerPick]}.<br> 
                    ${player} wins!`;
                    result.style.color = 'rgb(64, 215, 64)';
                    countUsersScore();
                } else if (computerPick === '✋') {
                    result.innerHTML = `${options[playerPick]} eats ${options[computerPick]}.<br> 
                    ${player} wins!`;
                    result.style.color = 'rgb(64, 215, 64)';
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
                    result.style.color = 'rgb(64, 215, 64)';
                    countUsersScore();
                } else if (computerPick === '✌️') {
                    result.innerHTML = `${options[playerPick]} smashes ${options[computerPick]}.<br>
                    ${player} wins!`;
                    result.style.color = 'rgb(64, 215, 64)';
                    countUsersScore();

                } else {
                    result.innerHTML = `${options[computerPick]} beats ${options[playerPick]}.<br> Computer wins!`;
                    result.style.color = 'rgb(255, 0, 17)';
                    countComputersScore();

                }
                break;

        }
    }

}

function gameRules1() {
    document.querySelectorAll(".rules-explain").forEach(element => {
        element.style.display = "block";
    });
    document.querySelectorAll(".start-game").forEach(element => {
        element.style.display = "none";
    });
    document.querySelectorAll("footer").forEach(element => {
        element.style.display = "none";
    });

    document.querySelector("#close-rules").addEventListener('click', closeRules1);  

}

function gameRules2() {
    document.querySelectorAll(".rules-explain").forEach(element => {
        element.style.display = "block";
    });
    document.querySelectorAll(".section-container").forEach(element => {
        element.style.display = "none";
    });
    document.querySelectorAll("footer").forEach(element => {
        element.style.display = "none";
    });

    document.querySelector("#close-rules").addEventListener('click', closeRules2);  

}

function closeRules1() {
    document.querySelectorAll(".rules-explain").forEach(element => {
        element.style.display = "none";
    });
    document.querySelectorAll(".start-game").forEach(element => {
        element.style.display = "flex";
    });
    document.querySelectorAll("footer").forEach(element => {
        element.style.display = "block";
    });

}

function closeRules2() {
    document.querySelectorAll(".rules-explain").forEach(element => {
        element.style.display = "none";
    });
    document.querySelectorAll(".start-game").forEach(element => {
        element.style.display = "none";
    });
    document.querySelectorAll(".section-container").forEach(element => {
        element.style.display = "flex";
    });
    document.querySelectorAll("footer").forEach(element => {
        element.style.display = "block";
    });

}

function exitGame() {

}