
//string
var animals = ["alpaca", "buffalo", "camel", "cat", "snake", 
                "tiger", "rabbit", "horse", "sheep", "monkey",
                "kangaroo", "giraffe", "dolphin", "goose", "crocodile",
                "flamingo", "elephent"]
//var collection:
var wins = 0;
var losses = 0;
var guessLeft = 15;
var guessSoFar = [];

var computerPick = "";
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessLeftText = document.getElementById("guessLeft");
var guessSoFarText = document.getElementById("guessSoFar");
var wordPlaceText = document.getElementById("wordPlace");
var remainingLetters = computerPick.length;
var answerArray = [];

//random pick word:
function pickWord(){
    return animals[Math.floor(Math.random() * animals.length)];
}

//display:
function updateDisplayValue(){
    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessLeftText.textContent = guessLeft;
    guessSoFarText.textContent = guessSoFar;
    wordPlaceText.textContent = answerArray.join(" ");
}

//reset all the display:
function reset(){
    guessLeft = 15;
    guessSoFar = [];
    computerPick = pickWord();
    answerArray = [];
    for (var i = 0; i < computerPick.length; i++) {
        answerArray[i] = "_";
    }
    remainingLetters = computerPick.length;
    updateDisplayValue();
}

reset();
//user press key:
document.onkeyup = function(event){
    var userGuess = event.key.toLowerCase();
    if(computerPick.indexOf(userGuess)!=-1){
        for (var j = 0; j < computerPick.length; j++){
            if(computerPick[j] === userGuess){
                answerArray[j] = userGuess;
                remainingLetters--;
            }
        }
    }
    guessSoFar += " " + userGuess;
    guessLeft--;
    //win
    if(remainingLetters === 0){
        wins++;
        reset();
    }
    //loss
    if(guessLeft === 0){
        losses++;
        reset();
    }
    updateDisplayValue();
}