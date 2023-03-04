"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

function displayMessage(message) {
    document.querySelector(".message").textContent = message;
}

function setScore(score) {
    document.querySelector(".score").textContent = score;
}

function setSecretNumber(number) {
    document.querySelector(".number").textContent = number;
}

function setBackgroundColor(color) {
    document.querySelector("body").style.backgroundColor = color;
}

function setHighScore(highScore) {
    document.querySelector(".highscore").textContent = highScore;
}

function setSecretNumberBoxWidth(boxWidth) {
    document.querySelector(".number").style.width = boxWidth;
}

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    // No Input
    if (!guess) {
        displayMessage("⛔ Enter Number!");

        // Guess is Correct
    } else if (guess == secretNumber) {
        displayMessage("🎉 Correct Number!");
        setSecretNumber(secretNumber);
        setBackgroundColor("#60b347");
        setSecretNumberBoxWidth("30rem");
        if (score > highScore) {
            highScore = score;
            setHighScore(highScore);
        }

        // Guess is Wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(
                guess > secretNumber ? "📈 Too High!" : "📉 Too Low!"
            );
            score--;
            setScore(score);
        } else {
            displayMessage("💥 You Lost");
            setScore(0);
        }
    }
});

document.querySelector(".again").addEventListener("click", function () {
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    score = 20;
    setScore(score);
    setSecretNumber("?");
    displayMessage("Start guessing...");
    document.querySelector(".guess").value = "";
    setBackgroundColor("#222");
    setSecretNumberBoxWidth("15rem");
});
