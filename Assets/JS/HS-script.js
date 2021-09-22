//Highscore Page
var goBackButton = document.querySelector(".goBack")
var clearButton = document.querySelector(".clear")
var scoreList = document.querySelector("#score-list");



//renders items in a score list as <li> elements
function renderScores() {
    // Clear scoreList element
    //scoreList.innerHTML = "";
  
    // Render a new li for each score
    for (var i = 0; i < storedScores.length; i++) {
      var score = storedScores.score[i];
      var name = storedScores.name[i];
  
      var li = document.createElement("li");
      li.textContent = name + ": " + score;
      li.setAttribute("data-index", i);
    
      scoreList.appendChild(li);
    }
  }

//runs on page load to show scores
  function init() {
    // Get stored scores from localStorage
    var storedScores = JSON.parse(localStorage.getItem("storedScores"));
  
    // If scores were retrieved from localStorage, update the scores array to it
    if (storedScores !== null) {
      scores = storedScores;
    }
  
    // This is a helper function that will render scores to the DOM
    renderScores();
  }

 //reset scores
 clearButton.addEventListener("click", function(){
  //empties object
  storedScores = {
    name:[],
    score:[]
  }

  //empty local storage
  localStorage.setItem("storedScores",storedScores);
 });
