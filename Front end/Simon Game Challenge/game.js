var gameStarted = false;
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

$(document).on("keypress", function () {
    if (!gameStarted) {
        gameStarted = true;
        nextSequence();
    }
})

$(".btn").on("click", function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
})

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("h1").text("Level " + level);

    //Randomly select colour
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    //Add to sequence
    gamePattern.push(randomChosenColour);
    //Animate the selected colour and play sound
    $('#' + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");

    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100)
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000)
        }
    }
    else {
        gameOver();
    }
}

function gameOver() {
    playSound("wrong");
    $("body").addClass("game-over");

    setTimeout(function () {
        $("body").removeClass("game-over");
    }, 200)

    $("h1").text("Game Over, Press Any Key to Restart");

    resetGame();
}

function resetGame() {
    gameStarted = false;
    level = 0;
    gamePattern = [];
}