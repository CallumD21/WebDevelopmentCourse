var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector("img.img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png")

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector("img.img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png")

var winner = "Player 2 Wins! 🚩";
if (randomNumber1 === randomNumber2) {
    winner = "Draw!"
}
else if (randomNumber1 > randomNumber2) {
    var winner = "🚩 Player 1 Wins!";
}

document.querySelector("h1").innerHTML = winner;