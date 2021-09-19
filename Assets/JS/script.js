/*Object full of quiz questions
var quizQuestions = {
    question1: {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["<js>","<scripting>","<script>","<javascript>"],
        correctAns: "<script>"
    },
    question2: {
        question: "Which built-in method returns the string representation of the number's value?",
        answers: ["toValue()","toNumber()","toString()","None of the above"],
        correctAns: "toString()"
    },
    question3: {
        question: "Which of the following function of String object combines the text of two strings and returns a new string?",
        answers: ["add()","merge()","concat()","append()"],
        correctAns: "concat()"
     } ,
    question4: {
        question: "A variable in Javascript is declared with which of the following keywords?",
        answers: ["new","int","string","var"],
        correctAns: "var"
    },
    question5: {
        question: "Which of the following are primitive data types in Javascript?",
        answers: ["String","Number","Boolean","All of the above"],
        correctAns: "All of the above"
    }
};*/

var quizQuestions = {
    questions:["Inside which HTML element do we put the JavaScript?","Which built-in method returns the string representation of the number's value?","Which of the following function of String object combines the text of two strings and returns a new string?","A variable in Javascript is declared with which of the following keywords?","Which of the following are primitive data types in Javascript?",],
    answers:["<js>","<scripting>","<script>","<javascript>","toValue()","toNumber()","toString()","None of the above","add()","merge()","concat()","append()","new","int","string","var","String","Number","Boolean","All of the above"],
    correctAns:["<script>","toString()","concat()","var","All of the above"]
}
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
      }
  
    }, 1000);
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


//Run timer when start pressed
startButton.addEventListener("click", function() {
    setTime();
});

//Start Button Function to Change Question
startButton.addEventListener("click", function() {
//Make section visible
contain.setAttribute("style","visibility = visible;")
 //Change header and 4 buttons text content
 //Need to figure out how to loop this
ques.textContent = quizQuestions.questions[0];
ans1.textContent = quizQuestions.answers[0];
ans2.textContent = quizQuestions.answers[1];
ans3.textContent = quizQuestions.answers[2];
ans4.textContent = quizQuestions.answers[3];
replace();
});

    //loop is running to five instead of waiting for a listening effect each time
    var i1= 1;
    var i2 = 4;
    function replace () {
    if (i1<quizQuestions.questions.length && i2<quizQuestions.answers.length) {
       //When any of the answer buttons are clicked 
       contain.addEventListener("click", function() { 
        ques.textContent = quizQuestions.questions[i1]; 
        ans1.textContent = quizQuestions.answers[i2];
        ans2.textContent = quizQuestions.answers[++i2];
        ans3.textContent = quizQuestions.answers[++i2];
        ans4.textContent = quizQuestions.answers[++i2];
    });
        replace();
 
    }
    //will replace text and whole answer list with form when questions are done
    else {
        headTitle.textContent = "The quiz is now over!"
        ques.textContent = "Your final score was " + secondsLeft;
        var endMess = document.createElement('form');
        newItem.innerHTML = "<label> Name:</label><br>\n<input type='text'<br><br>\n<a href= './/highscore.html'> <input type='submit' value='Submit'> </a>";
        replaceAns.parentNode.replaceChild(endMess, replaceAns);
        return
    }     
    }













//Highscore Page
var goBackButton = document.querySelector(".goBack")
var clearButton = document.querySelector(".clear")


/*Brainstorm thoughts 
need to figure out how to loop through object
need to use seconds left variable and report it as score
needs to be an highscore entry screen triggered by zero interval or last question
need to check for correct/wrong answer and subtract time if wrong
take name from form and score number and output on highscore
recursive function issue

everytime an answer button is pressed the loop needs to progress






*/