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
var scoreList = {
    name:[],
    score:[]
}


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
        clearInterval(timerInterval);
        gameOver();
        timerDisplay.textContent = "Time's Up!"
      }
  
    }, 1000);
  }

  //Function for end of game
function gameOver() {
        
        var finalScore = secondsLeft;

        //stops the change caused by clicking in this area
            contain.removeEventListener("click", myFunction);
            
            //shows text telling the user game over
            headTitle.textContent = "The quiz is now over!"
            ques.textContent = "Your final score was " + finalScore;
            
            //Create form to capture name and place form in place of the answer choices
            var endMess = document.createElement('form');
            endMess.setAttribute("id", "score-form");
            endMess.innerHTML = "<label> Name:</label> \n <input id='score-text' name='score-text' type='text'/>\n <input id='submit' type='submit' value='Submit' action ='./highscore.html'/> ";
            replaceAns.parentNode.replaceChild(endMess, replaceAns);
            
            
            //grabs submit button and input
            //var submit = document.querySelector("#submit");
            var name = document.querySelector("#score-text");
            scoreList.name.push(name.value);
            scoreList.score.push(finalScore);
            
            //grabs the list object and stores it locally

            localStorage.setItem("scoreList",JSON.stringify(scoreList));
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

//Sets index variables for change question inside myfunction
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
          //submit button function
           


        


        
/*Brainstorm thoughts 
needs to be an highscore entry screen triggered by zero interval or last question
take name from form and score number and output on highscore
submit button triggers to highscore page
need to figure out why it takes a extra click to trigger form









*/