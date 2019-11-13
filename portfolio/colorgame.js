var numSquares = 6;
var colors = generateCol(numSquares);
var pickedColor = pickCol();

var squares = document.querySelectorAll(".square");
var choosen = document.getElementById("choosen");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeBtns = document.querySelectorAll(".mode");


for(var i = 0; i < modeBtns.length; i++){
    modeBtns[i].addEventListener("click", function(){
        modeBtns[0].classList.remove("selected");
        modeBtns[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        reset();
    });
}

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
        message.textContent = "Correct!";
        resetButton.textContent = "Play Again?"
        changeCol(clickedColor);
        h1.style.backgroundColor = clickedColor}
        else{this.style.backgroundColor = "#141414";
        message.textContent = "Try Again!"}
    });
}

resetButton.addEventListener("click", function(){
    reset();
});

choosen.textContent = pickedColor;


function reset(){
    colors = generateCol(numSquares);
    pickedColor = pickCol();
    choosen.textContent = pickedColor;
    message.textContent = "";
    resetButton.textContent = "new colors";
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];}
        else {squares[i].style.display = "none";}
    } h1.style.backgroundColor = "steelblue";
}

function changeCol(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickCol(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateCol(num){
    var arr = []
    for(var i = 0; i < num; i++){
        arr.push(randomizer());
    }
    return arr;
}

function randomizer(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb("+ r + ", " + g + ", " + b +")";
}


/*    ----   LONG WAY THROUGH with buttons:   ---- 

var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateCol(numSquares);
    pickedColor = pickCol();
    choosen.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){squares[i].style.backgroundColor = colors[i];}
        else {squares[i].style.display = "none";}
    }
    h1.style.backgroundColor = "steelblue";
});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateCol(numSquares);
    pickedColor = pickCol();
    choosen.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
    h1.style.backgroundColor = "steelblue";
});

resetButton.addEventListener("click", function(){
    colors = generateCol(numSquares);
    pickedColor = pickCol();
    choosen.textContent = pickedColor;
    message.textContent = "";
    this.textContent = "new colors";
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});

*/