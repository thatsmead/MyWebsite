var tgButton = document.querySelector("#tg");
var tbButton = document.getElementById("tb");
var tgDisplay = document.querySelector("#tgDisplay");
var tbDisplay = document.querySelector("#tbDisplay");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector(".input");
var maxScore = document.querySelector("#span");
var phrase = document.querySelector("h3");
var name1Input = document.querySelector("#gt");
var name2Input = document.querySelector("#bt");
var name1Display = document.querySelector("#tg");
var name2Display = document.querySelector("#tb");

var tgScore = 0;
var tbScore = 0;
var gameOver = false;
var winScore = 99;

tgButton.addEventListener("click", function(){
    if(!gameOver){
    tgScore++;
        if(tgScore >= winScore){
            tgDisplay.classList.add("winner");
            phrase.classList.remove("hidden");
            gameOver = true;}
    tgDisplay.textContent = tgScore;
    }
});

tbButton.addEventListener("click", function(){
    if(!gameOver){
    tbScore++;
        if(tbScore >= winScore){
            tbDisplay.classList.add("winner");
            phrase.classList.remove("hidden");
            gameOver = true;}
    tbDisplay.textContent = tbScore;
    }
});

resetButton.addEventListener("click", function(){
    tgScore = 0;
    tbScore = 0;
    tgDisplay.textContent = tgScore;
    tbDisplay.textContent = tbScore;
    tgDisplay.classList.remove("winner");
    tbDisplay.classList.remove("winner");
    phrase.classList.add("hidden");
    gameOver = false;
});

numInput.addEventListener("change", function(){
    maxScore.textContent = numInput.value;
    winScore = Number(numInput.value);
});

name1Input.addEventListener("change", function(){
    name1Display.textContent = name1Input.value;
});

name2Input.addEventListener("change", function(){
    name2Display.textContent = name2Input.value;
});