'use strict';

var number = Math.trunc(Math.random() * 20);
document.querySelector(".number").textContent = "?";

var score = 20;
document.querySelector(".score").textContent = score;

var highscore = 0;

const setGame = function () {

    const guess = Number(document.querySelector(".guess").value);

    //When there's no input
    if (!guess) {
        document.querySelector(".message").textContent = "No Number!"
    }
    //When the player wins
    else if (guess === number) {
        document.querySelector(".message").textContent = "Correct Number!"

        highscore = score;
        document.querySelector(".highscore").textContent = highscore;

        document.querySelector("body").style.backgroundColor = "#60b347"
        document.querySelector(".number").textContent = number
    }
    //When the player false
    else if (guess > number) {
        document.querySelector(".message").textContent = "Too high!"
        score = score - 1
        document.querySelector(".score").textContent = score
    } else if (guess < number) {
        document.querySelector(".message").textContent = "Too low!"
        score = score - 1
        document.querySelector(".score").textContent = score
    }
}

document.querySelector(".check").addEventListener("click", setGame)

document.querySelector(".again").addEventListener("click", function () {
    //reset the score
    number = Math.trunc(Math.random() * 20);

    score = 20;
    document.querySelector(".score").textContent = score;

    //reset css

    document.querySelector(".number").textContent = "?";
    document.querySelector("body").style.backgroundColor = "#222";

})

