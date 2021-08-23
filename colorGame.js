var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var colorPicked  = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = colorPicked;
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	//generate all new colors
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	//pick a random color
	colorPicked  = pickColor();
	//display the picked color
	colorDisplay.textContent = colorPicked;
	for(i=0 ; i<squares.length ; i++){
	//add intial colors to squares
	if(colors[i]){
	squares[i].style.backgroundColor = colors[i];
}	else{
	squares[i].style.display = "none";
}
}
	h1.style.backgroundColor = "steelblue";
})

hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
		//generate all new colors
		numSquares = 6;
	colors = generateRandomColors(numSquares);
	//pick a random color
	colorPicked  = pickColor();
	//display the picked color
	colorDisplay.textContent = colorPicked;
	for(i=0 ; i<squares.length ; i++){
	//add intial colors to squares
	squares[i].style.backgroundColor = colors[i];
	squares[i].style.display = "block";
}
	h1.style.backgroundColor = "steelblue";
});

resetButton.addEventListener("click",function(){
	messageDisplay.textContent = "";
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a random color
	colorPicked  = pickColor();
	//display the picked color
	colorDisplay.textContent = colorPicked;
	this.textContent = "New Colors";
	//change color of squares
	for(i=0 ; i<squares.length ; i++){
	//add intial colors to squares
	squares[i].style.backgroundColor = colors[i];
}
	h1.style.backgroundColor = "steelblue";
})
for(i=0 ; i<squares.length ; i++){
	//add intial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listner to squares
	squares[i].addEventListener("click",function(){

	//grab color of picked square
	var clickedColor = this.style.backgroundColor

	//compare color to colorPicked	
	if(clickedColor === colorPicked){
		messageDisplay.textContent = "Correct!";
		resetButton.textContent = "Play Again?";
		changeColor(clickedColor);	
		h1.style.backgroundColor = clickedColor;
	}
	else {
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again ";	
	}
	})

	
}
function changeColor(color) {
	for(i=0 ; i<squares.length ; i++){
	//change all colors to clickedcolor
	squares[i].style.backgroundColor = color;
}

}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random]; 
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for(var i = 0; i < num; i++){

		//add random numbers to array
		arr.push(randomColor());
		

	}
	
	//return  that ARRRAY
	return arr;
}
function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}