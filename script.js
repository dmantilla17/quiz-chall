// Dependencies 
//start button
var startButton= document.querySelector("#start");
var quiz=document.querySelector('#quiz');
var question1= document.querySelector("#question-1");
var question2= document.querySelector("#question-2");
var question3= document.querySelector("#question-3");
var timeLeft=document.querySelector("#time-left");
var wrongAnswer=document.querySelector("#wrong-answer");
var correctAnswer=document.querySelector("#right-answer");
//Data 
var questionNumber=0
var question1={
    text: "Which of the following represents true or false in an array?:",
    answers: ["Strings","Booleans","Alerts","Numbers"],
    correctAnswer:"Booleans", 
};
var question2={
    text: "A very useful toool used during development and debugging for printing content to the debugger is:",
    answers:["terminal/bash","for loops","console.log","Javascript"],
    correctAnswer: "Javascript",
};
var question3={
    text:"String values must be enclosed within ___ when being assigned to variables.",
    answers:["Curly Brackets","Commas","Quotes","Parenthesis"],
    correctAnswer:"Quotes",
};

//alerts
//questions for the survey
//3 questions 

//answer choices with 4 options
//the right or wrong questions 
//FUNCTIONS
//Question1.answers[questionNumber] -- text content
//indexNumber var--can determine what the answer is 
//if you hit the right answer the number goes up
function startQuiz() {
    console.log('Starting game');
}
var question1= getquestion1()
//start timer
function startTimer(){
    console.log('Timer started');
}
//present a question
//end timer
//if not answered then imcomplete then error
//display wrong answer and right answer
//submit button for the quiz results

//recording the score of answers
//giving them a score for right or wrong answers 
//timer starts and then i am presented with 
//USER INTERACTIONS 
//Start button
startButton.addEventListener('click',startQuiz);
//Pressing the buttons for choosing a choice 


//INIZILIZATION