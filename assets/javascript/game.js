

//string
var animals = ["alpaca", "buffalo", "camel", "cat", "snake", 
                "tiger", "rabbit", "horse", "sheep", "monkey",
                "kangaroo", "giraffe", "dolphin", "goose", "crocodile"]

var computerPick = pickWord();

function pickWord(){
    return animals[Math.floor(Math.random() * animals.length)];
}

var answerArray = [];
for (var i = 0; i < computerPick.length; i++) {
 answerArray[i] = "_";
}

//make array to string and display it
document.getElementById("wordPlace").textContent = answerArray.join(" ");


var win = 0;
var losses = 0;
var guessLeft = 10;
var guessSoFar = "";

var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessLeftText = document.getElementById("guessLeft");
var guessSoFarText = document.getElementById("guessSoFar");

var computerPick = animals[Math.floor(Math.random() * animals.length)];



document.getElementById("wordPlace").textContent = answerArray.join(" ");

var remainingLetters = computerPick.length;
//game loop
document.onkeyup = function(event){
    var userGuess = event.key.toLowerCase();
if(userGuess.indexOf(computerPick)!=-1){
    for (var j = 0; j < computerPick.length; j++){
        if(computerPick[j] === userGuess){
            answerArray[j] = userGuess;
            remainingLetters--;
}
}
}
}





