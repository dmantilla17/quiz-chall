function displayHighscores() {
  var highscoresEl = document.querySelector("#highscores");
  var highscores = getHighscores(); // a function that retrieves the highscores from local storage or a server
  for (var i = 0; i < highscores.length; i++) {
    var score = highscores[i];
    var listItem = document.createElement("li");
    listItem.textContent = score.name + " - " + score.score;
    highscoresEl.appendChild(listItem);
  }
}
