// Dependencies 
//start button
var startButton= document.querySelector("#start");
var quiz=document.querySelector('#quiz');
var questions= document.querySelector("#questions");
var timerEL=document.querySelector("#timer");
var wrongAnswer=document.querySelector("#wrong-answer");
var correctAnswer=document.querySelector("#right-answer");
//Data 
var secondsLeft=75;
var questionsNumber=0
var questions=[
    {
    questionText: "Which of the following represents true or false in an array?:",
    answers= ["Strings","Booleans","Alerts","Numbers"],
    correctAnswer= "Booleans", 
}:
var questionText={
    text: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers=["terminal/bash","for loops","console.log","Javascript"],
    correctAnswer= "Javascript",
};
var questionText={
    text="String values must be enclosed within ___ when being assigned to variables.",
    answers=["Curly Brackets","Commas","Quotes","Parenthesis"],
    correctAnswer="Quotes",
},
];

//FUNCTIONS
function startTimer(){
    console.log('Timer started');}
    timerInterval=setInterval(function() {
        secondsLeft=80;
        secondsLeft+ "seconds left";
        if(secondsLeft===0){
            clearInterval(timerInterval);
        }
    
    });1000

question1.answers(questionNumber)[0];{
if (question1===['1']){
    correctAnswer();
} else wrongAnswer();
}

 function startTimer(){
    console.log('Timer started');
    var timeLeft= 80;
    timerEL.textContent= timeLeft;


    var timerInterval=setInterval(function() {
        timeLeft--;
        timerEL.textContent= timeLeft;
        if (timeLeft===0){
            clearInterval(timerInterval);
            losses++;
            displayLoss();
        }else {
            if(didUserwin){
                clearInterval(timerInterval);
                wins++;
                displayWin();
            }
        }
    },1000);

}

//indexNumber var--can determine what the answer is 
//if you hit the right answer the number goes up

function startQuiz() {
    console.log('Starting game');
}
//start timer
function startTimer(){
    console.log('Timer started');
}
function
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