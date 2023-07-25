var startButton = document.querySelector("#start_button");
var firstPage = document.querySelector(".first_page");
var quiz = document.querySelector(".quiz");
var q1 = document.querySelector("#q1");
var a1 = document.querySelector("#a1");
var a2 = document.querySelector("#a2");
var a3 = document.querySelector("#a3");
var a4 = document.querySelector("#a4");
var display_question = document.querySelector(".questionsDisplayed");
var next = document.querySelector("#next");
var questionIndex = 0;
var score = 0;
var count = 0;
quiz.style.display = "none";
startButton.addEventListener("click", startQuiz);
startButton.addEventListener("click", startQuiz);
next.addEventListener("click", nextF);
var selectedAnswer = "Integer";


function startQuiz() {
    firstPage.style.display= "none";
    startButton.disabled = true;    
    quiz.style.display =  "block";
    showQuestion(count);
}   

var quizQuestion = [
    {
    question: "What is not Data Type?",
    answers: ["Strings","Integer","Boolean","Alert"],
    correctAnswer: "Alert"
    },

    {
    question: "most useful debugger is?",
    answers: ["Console","for loop","JavaScript","if_else"],
    correctAnswer: "Console"
    },

    {
    question: "Array in the javaScrpit is used to store?",
    answers: ["Number", "String","Boolean","All"],
    correctAnswer: "All"
    }, 

    {
    question: "String values must be enclosed in?",
    answers: ["Paranthesis", "Sqaure Bracket","Round Bracket","double quotes"],
    correctAnswer: "double quotes"
    }, 

    {
    question: "src stands for?",
    answers: ["Source", "Data","Error","All"],
    correctAnswer: "Source"
    }, 
]


function nextF (){
    questionIndex++;
    console.log(questionIndex);
    count++;
    showQuestion(count);

}

function showQuestion (countQ) {
    q1.innerHTML = "<h3>"+quizQuestion[countQ].question+"<h3/>";
    a1.textContent= quizQuestion[countQ].answers[0];
    a2.innerHTML= quizQuestion[countQ].answers[1];
    a3.innerHTML= quizQuestion[countQ].answers[2];
    a4.innerHTML= quizQuestion[countQ].answers[3];
    //display_question.innerHTML = `<h2>${questions[countQ].question}</h2>
    // <ul class = "option_group">
    // <li class = "option>${quizQuestion[countQ].answers[0]}</li>
    //<li class = "option>${quizQuestion[countQ].answers[1]}</li>
    // <li class = "option>${quizQuestion[countQ].answers[2]}</li>
    //<li class = "option>${quizQuestion[countQ].answers[3]}</li>
    //</ul>`;
    
    
    
}

function selectedAnswer(){
    a1.setAttribute("class","selected");
    console.log(a1);
}
selectedAnswer();
//a1.addEventListener("click",selectedAnswer);


    