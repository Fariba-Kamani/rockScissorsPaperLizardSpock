document.querySelector('form').addEventListener('submit', function(event) {
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

}

function showUsersChoice() {

}

function showComputersChoice() {

}

function countUsersScore() {

}

function countComputersScore() {

}

function ShowResult() {

}

function gameRules() {

}

function exitGame() {

}