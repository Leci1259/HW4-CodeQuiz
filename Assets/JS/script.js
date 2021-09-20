//Object of Quiz Questions
var quizQuestions = {
    questions:["Inside which HTML element do we put the JavaScript?","Which built-in method returns the string representation of the number's value?","Which of the following function of String object combines the text of two strings and returns a new string?","A variable in Javascript is declared with which of the following keywords?","Which of the following are primitive data types in Javascript?",],
    answers:["<js>","<scripting>","<script>","<javascript>","toValue()","toNumber()","toString()","None of the above","add()","merge()","concat()","append()","new","int","string","var","String","Number","Boolean","All of the above"],
    correctAns:["<script>","toString()","concat()","var","All of the above"]
}

//All query elements to change
var ques = document.querySelector("#qTitle");
var ans1 = document.querySelector("#a1");
var ans2 = document.querySelector("#a2");
var ans3 = document.querySelector("#a3");
var ans4 = document.querySelector("#a4");
var contain = document.querySelector("#questions"); 
var startButton = document.querySelector(".startButton");
var timerDisplay = document.querySelector(".timer")
var replaceAns = document.querySelector("ol");
var headTitle = document.querySelector("h2");
var pop = document.querySelector("#pop");


//Timer seconds
var secondsLeft = 50;

//Timer function
function setTime() {
    
    // Sets interval in variable
    var timerInterval = setInterval(function() {
       secondsLeft--;
       timerDisplay.textContent = secondsLeft + " seconds left!";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        gameOver();
        clearInterval(timerInterval);
        timerDisplay.textContent = "Time's Up!"
      }
  
    }, 1000);
  }

  //Function for end of game
function gameOver() {
        //shows text telling the user game over
        //var finalScore = secondsLeft;
            headTitle.textContent = "The quiz is now over!"
            ques.textContent = "Your final score was " + score;
            
            //Create form to capture name and place form in place of the answer choices
            var endMess = document.createElement('form');
            endMess.setAttribute("id", "score-form");
            endMess.innerHTML = "<label> Name:</label> \n <input id='score-text' name='score-text' type='text'/>\n <input id='submit' type='submit' value='Submit' action ='./highscore.html'/> ";
            replaceAns.parentNode.replaceChild(endMess, replaceAns);
            
            //stops the change caused by clicking in this area
            contain.removeEventListener("click", myFunction);
            
            
            /*grabs the name input and score and stores is locally
            localStorage.setItem("name",nameInput);
            localStorage.setItem("score", score)*/
    }



//Start Button event
startButton.addEventListener("click", function() {

//starts timer
setTime();

//Make section visible
contain.setAttribute("style","visibility = visible;");
 //Change header and 4 buttons text content to 1st question
ques.textContent = quizQuestions.questions[0];
ans1.textContent = quizQuestions.answers[0];
ans2.textContent = quizQuestions.answers[1];
ans3.textContent = quizQuestions.answers[2];
ans4.textContent = quizQuestions.answers[3];
});

//Sets index variables for change question function
    var i1= 0;
    var i2 = 3;

//Answer buttons event
       contain.addEventListener("click", myFunction);

       function myFunction () {
           //Grabs the answer pressed
           var answer = event.target.textContent;

           //Checks if answer is right or wrong
           if (answer == quizQuestions.correctAns[i1]) {
               //shows correct answer text
               pop.textContent = "Correct Answer!"
           }
           else {
               //shows wrong answer text and deducts time
               pop.textContent = "Wrong Answer!"
               if (secondsLeft>0) {
                   secondsLeft=secondsLeft-10;
               }
           }

           // changes to next question if index is not out of bounds
           if (i1< quizQuestions.questions.length && secondsLeft!==0) {
        ques.textContent = quizQuestions.questions[++i1]; 
        ans1.textContent = quizQuestions.answers[++i2];
        ans2.textContent = quizQuestions.answers[++i2];
        ans3.textContent = quizQuestions.answers[++i2];
        ans4.textContent = quizQuestions.answers[++i2];
           }
           else {
           gameOver();
            }
        };
           
        




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














/*Brainstorm thoughts 
needs to be an highscore entry screen triggered by zero interval or last question
take name from form and score number and output on highscore
submit button triggers to highscore page
need to figure out why it takes a extra click to trigger form









*/