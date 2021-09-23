//Highscore Page
var goBackButton = document.querySelector(".goBack")
var clearButton = document.querySelector(".clear")
var scoreList = document.querySelector("#score-list");
var storedScores = JSON.parse(localStorage.getItem("storedScores")) || {
   name: [],
   score: [],
 };

//runs on page load to show scores
  function init() {

         for (var i = 0; i < storedScores.name.length; i++) {
      var score = storedScores.score[i];
      var name = storedScores.name[i];
  
      var li = document.createElement("li");
      li.textContent = name + ": " + score;
      li.setAttribute("data-index", i);
    
      scoreList.appendChild(li);
  
    // This is a helper function that will render scores to the DOM
   // renderScores();
  }}

 //reset scores
 clearButton.addEventListener("click", function(){

  //empty local storage
  localStorage.removeItem("storedScores");

  //empty list
  var list = document.querySelectorAll("li")
  for (var i =0; i<list.length;i++) {
    list[i].textContent=""
  };

 });


 // run on start
 init();

 