//Highscore Page
var goBackButton = document.querySelector(".goBack")
var clearButton = document.querySelector(".clear")
var scoreInput = document.querySelector("#score-text");
var scoreForm = document.querySelector("#score-form");
var scoreList = document.querySelector("#score-list");
var scores =[];

//renders items in a score list as <li> elements
function renderScores() {
    // Clear scoreList element
    scoreList.innerHTML = "";
  
    // Render a new li for each score
    for (var i = 0; i < scores.length; i++) {
      var score = scores[i];
  
      var li = document.createElement("li");
      li.textContent = score;
      li.setAttribute("data-index", i);
    
      scoreList.appendChild(li);
    }
  }
// stores the scores
  function storeScores() {
    // Stringify and set key in localStorage to todos array
    localStorage.setItem("scores", JSON.stringify(scores));
  }
  
//runs on page load to show scores
  function init() {
    // Get stored scores from localStorage
    var storedScores = JSON.parse(localStorage.getItem("scores"));
  
    // If scores were retrieved from localStorage, update the scores array to it
    if (storedScores !== null) {
      scores = storedScores;
    }
  
    // This is a helper function that will render scores to the DOM
    renderScores();
  }

  // Add submit event to form
scoreForm.addEventListener("submit", function(event) {
    event.preventDefault();
  
    var scoreText = scoreInput.value + ": " + secondsLeft;
  
    // Return from function early if submitted todoText is blank
    if (scoreText === "") {
      return;
    }
  
    // Add new todoText to todos array, clear the input
    scores.push(scoreText);
    scoresInput.value = "";
  
    // Store updated todos in localStorage, re-render the list
    storeScores();
    renderScores();
  });

  init();
