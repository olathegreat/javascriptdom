// DOM MANIPULATION IN JAVASCRIPT DOCUMENT OBJECT MODEL
// What is DOM?
// The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

// document selectors
// How to select HTML elements in javascript
// 1. getElementById
var homeNav = document.getElementById("home-nav");

// homeNav.innerHTML = "Olarotimi"
// homeNav.style.color = "red";
// homeNav.style.backgroundColor = "black";

// 2. getElementsByClassName
var startGame = document.getElementsByClassName("start-game");

// 3. getElementsByTagName
// var button = document.getElementsByTagName("button");

// var button = document.getElementsByTagName("button");
var divSelector = document.getElementsByTagName("div");

// 4. querySelector
// var button = document.querySelector("button") //for tags;
// var button = document.querySelector(".start-game") //for class;
// var button = document.querySelector("#home-nav") //for id;
// 5. querySelectorAll
//var button = document.querySelectorAll("button"); //for tags;

// How to change the content of HTML elements  //innerHTML
// How to change the style (CSS) of HTML elements// .style
// How to react to HTML DOM events

var incrementBtn = document.querySelector(".increment");
var decrementBtn = document.querySelector(".decrement");
var numberDisplay = document.querySelector(".number-display");
var scoreToDisplay = 0;
var mainSelector = document.querySelector("main");
var messageSelector = document.querySelector(".message");
var startGameBtn = document.querySelector(".start-game");
var endGameBtn = document.querySelector(".end-game");

incrementBtn.addEventListener("click", function () {
  if (scoreToDisplay < 10) {
    scoreToDisplay = scoreToDisplay + 1;
  }

  if (scoreToDisplay === 10) {
    mainSelector.style.backgroundColor = "rgba(193, 255, 193, 1)";
    messageSelector.innerHTML = "You have reached the maximum score";
  } else {
    messageSelector.innerHTML = "";
    mainSelector.style.backgroundColor = "white";
  }

  numberDisplay.innerHTML = scoreToDisplay;
});
decrementBtn.addEventListener("click", decrementFunction);

function decrementFunction() {
  if (scoreToDisplay > 0) {
    scoreToDisplay = scoreToDisplay - 1;
  }

  if (scoreToDisplay === 0) {
    mainSelector.style.backgroundColor = "rgba(255, 161, 181, 1)";
    messageSelector.innerHTML = "You have reached the minimum score";
  } else {
    messageSelector.innerHTML = "";
    mainSelector.style.backgroundColor = "white";
  }

  numberDisplay.innerHTML = scoreToDisplay;
}

startGameBtn.addEventListener("click", startGameFunction);

function startGameFunction() {
  scoreToDisplay = 0;
  numberDisplay.innerHTML = scoreToDisplay;
  messageSelector.innerHTML = "";
  mainSelector.style.backgroundColor = "white";
}

endGameBtn.addEventListener("click", endGameFunction);

function endGameFunction() {
  scoreToDisplay = 0;
  numberDisplay.innerHTML = scoreToDisplay;
  messageSelector.innerHTML = "";
  mainSelector.style.backgroundColor = "white";
  

  var win = window.open("", "_self");
  win.close();
}
// How to add and delete HTML elements
