// Dependencies
//start button
var startButton = document.querySelector("#start");
var quiz = document.querySelector("#questions");
var choicesEL = document.querySelector("#choices");
var submitButton = document.querySelector("#submit");
var initialsEl = document.querySelector("#initials");
var timerID;
var timerEL = document.querySelector("#time");
//Data
var secondsLeft = 75;
var questionsNumber = 0;
var questions = [
  {
    questionText:
      "Which of the following represents true or false in an array?:",
    answers: ["Strings", "Booleans", "Alerts", "Numbers"],
    correctAnswer: "Booleans",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["terminal/bash", "for loops", "console.log", "Javascript"],
    correctAnswer: "Javascript",
  },
  {
    questionText:
      "String values must be enclosed within ___ when being assigned to variables.",
    answers: ["Curly Brackets", "Commas", "Quotes", "Parenthesis"],
    correctAnswer: "Quotes",
  },
];

//FUNCTIONS
function startQuiz() {
  console.log("Quiz started");
  var startScreenEl = document.querySelector("#startScreen");
  startScreenEl.setAttribute("class", "hidden");
  quiz.removeAttribute("class");
  timerID = setInterval(countdown, 1000);
  timerEL.textContent = secondsLeft;

  displayCurrentQuestion();
}
function countdown() {
  secondsLeft--;
  timerEL.textContent = secondsLeft;
  if (secondsLeft <= 0) {
    endQuiz();
  }
}

function displayCurrentQuestion() {
  var currentQuestion = questions[questionsNumber]; // -> questions[1] -> {};
  let questionTextEl = document.querySelector("#question-title");
  questionTextEl.textContent = currentQuestion.questionText;
  choicesEL.innerHTML = "";
  for (var i = 0; i < currentQuestion.answers.length; i++) {
    var answer = currentQuestion.answers[i];
    var button = document.createElement("button");
    button.setAttribute("class", "answer");
    button.setAttribute("value", answer);
    button.textContent = answer;
    choicesEL.appendChild(button);
  }
}

function checkAnswer(event) {
  var answerEl = event.target;
  if (!answerEl.matches(".answer")) {
    return;
  }
  if (answerEl.value !== questions[questionsNumber].correctAnswer) {
    secondsLeft -= 10;
    if (secondsLeft < 0) {
      secondsLeft = 0;
    }
    timerEL.textContent = secondsLeft;
  }
  questionsNumber++;
  if (secondsLeft <= 0 || questionsNumber === questions.length) {
    endQuiz();
  } else {
    displayCurrentQuestion();
  }
}
function endQuiz() {
  clearInterval(timerID);
  var endScreenEl = document.querySelector("#end-screen");
  endScreenEl.removeAttribute("class");
  quiz.setAttribute("class", "hidden");
  var finalScoreEl = document.querySelector("#final-score");
  finalScoreEl.textContent = secondsLeft;
}
//function that saves highscore

//seperate html
//seperate js linked to HS
choicesEL.onclick = checkAnswer;

startButton.addEventListener("click", startQuiz);

//INIZILIZATION
function highScore(event) {
  event.preventDefault();
  var initials = initialsEl.value.toUpperCase();
  var newScore = {
    score: secondsLeft,
    initials: initials,
  };
  var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];

  highScores.push(newScore);
  window.localStorage.setItem("highScores", JSON.stringify(highScores));

  window.location.replace("highScore.html");
}

if (submit) {
  submit.onclick = highScore;
}
