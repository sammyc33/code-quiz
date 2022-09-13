//Var array with questions, options, and answers 
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        options: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        answer: "c. alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        options: ["a. quotes", "b. curly brackets", "c. parentheses", "d. square brackets"],
        answer: "c. parentheses"
    },
    {
        question: "How do you create a function in JavaScript",
        options: ["a. function = myFunction()", "b. function myFunction()", "c. function:myFunction()", "d. createMyFunction()"],
        answer: "b"
    },
    {
        question: "How do you call a function named myFunction?",
        options: ["a. call myFunction()", "b. call function myFunction()", "c. myFunction()", "d. call myFunction"],
        answer: "c"
    }
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        options: ["a. commas", "b. curly brackets", "c. quotes", "d. parenthesis"],
        answer: "c"
    }
];

//Define remaining variables and elements
var timer;
var initials;

var startBtn = document.querySelector("#start-button");
var timerEL = document.querySelector("#timer");
var initialsEL = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit-button");

// Clicking start button starts the timer and game begins
function startQuiz() {
    timerCount = 60;
    startTimer();
}

// Start the timer
function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount >= 0) 
}, 1000);
}
//Questions, once the timer has started the first question and its clickable answers will appear
function askQuestions() {

}

//Keep score

//End game, display game over!

//Save initials and score by clicking Submit(init function?)

// Go back

// Clear Scores

// Event listener to call the startQuiz function
startBtn.addEventListener("click", startQuiz);