var buttons = document.querySelectorAll("button.drum");
for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.addEventListener("click", function () {
        var buttonText = this.innerHTML;
        playSound(buttonText);
    });
}

document.addEventListener("keydown", function (event) {
    playSound(event.key);
})

function playSound(character) {
    var audioUrl = "";
    switch (character) {
        case "w":
            audioUrl = "./sounds/tom1.mp3"
            break;
        case "a":
            audioUrl = "./sounds/tom2.mp3"
            break;
        case "s":
            audioUrl = "./sounds/tom3.mp3"
            break;
        case "d":
            audioUrl = "./sounds/tom4.mp3"
            break;
        case "j":
            audioUrl = "./sounds/snare.mp3"
            break;
        case "k":
            audioUrl = "./sounds/crash.mp3"
            break;
        case "l":
            audioUrl = "./sounds/kick.mp3"
            break;
        default:
            console.log(character);
            break;
    }
    if (audioUrl !== "") {
        var audio = new Audio(audioUrl);
        audio.play();

        buttonAnimation(character);
    }
}

function buttonAnimation(character) {
    var activeButton = document.querySelector("." + character);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}