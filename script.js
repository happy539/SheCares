//Variables
var optionA = 0;
var optionB = 0;
var optionC = 0;
var optionD = 0;
var score = 0;
var questionCount = 0; 

var restart = document.getElementById("restart");
var submit = document.getElementById("submit");
var result = document.getElementById("result");
var start = document.getElementById("start");
var learnMore = document.getElementById("learnMore");
var goUp = document.getElementById("goUp");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
var q1a5 = document.getElementById("q1a5");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
var q2a5 = document.getElementById("q2a5");


var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
var q3a5 = document.getElementById("q3a5");


var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");
var q4a5 = document.getElementById("q4a5");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");
var q5a5 = document.getElementById("q5a5");


//Functions

function re_start(){
  location.reload();
  window.scrollTo(0,0);
}

function sub_mit(){
  //Scoring 
  if (q1a1.checked) {
    score += 1;
    questionCount += 1;
  }
  if (q2a1.checked){
    score +=1;
    questionCount += 1;

  }
  if (q3a1.checked){
    score +=1;
    questionCount += 1;

  }
  if (q4a1.checked){
    score +=1;
    questionCount += 1;

  }
  if (q5a1.checked){
    score +=1;
    questionCount += 1;

  }
  if (q1a2.checked) {
    score += 2;
    questionCount += 1;

  }
  if (q2a2.checked){
    score +=2;
    questionCount += 1;

  }
  if (q3a2.checked){
    score +=2;
    questionCount += 1;

  }
  if (q4a2.checked){
    score +=2;
    questionCount += 1;

  }
  if (q5a2.checked){
    score +=2;
    questionCount += 1;

  }
  if (q1a3.checked) {
    score += 3;
    questionCount += 1;

  }
  if (q2a3.checked){
    score +=3;
    questionCount += 1;

  }
  if (q3a3.checked){
    score +=3;
    questionCount += 1;

  }
  if (q4a3.checked){
    score +=3;
    questionCount += 1;

  }
  if (q5a3.checked){
    score +=3;
    questionCount += 1;

  }
    if (q1a4.checked) {
    score += 4;
    questionCount += 1;

  }
  if (q2a4.checked){
    score +=4;
    questionCount += 1;

  }
  if (q3a4.checked){
    score +=4;
    questionCount += 1;

  }
  if (q4a4.checked){
    score +=4;
    questionCount += 1;

  }
  if (q5a4.checked){
    score += 4;
    questionCount += 1;

  }
  if (q1a5.checked) {
    score += 5;
    questionCount += 1;

  }
  if (q2a5.checked){
    score += 5;
    questionCount += 1;

  }
  if (q3a5.checked){
    score += 5;
    questionCount += 1;

  }
  if (q4a5.checked){
    score += 5;
    questionCount += 1;

  }
  if (q5a5.checked){
    score += 5;
    questionCount += 1;

  }

  
}

function re_sult(){
  if (questionCount < 5){
    result.innerHTML = "Please Answer All the Questions";
  }
  else if (5 < score && score < 10){
    result.innerHTML = "The low intensity exercises are the best fit for you. Go to the activities tab to find these exercises!";
  }
  else if (10 < score && score < 15){
    result.innerHTML = "The medium intensity exercises are the best fit for you. Go to the activities tab to find these exercises!";
  }
  else if (15 < score && score < 20){
    result.innerHTML = "The medium intensity exercises are the best fit for you. Go to the activities tab to find these exercises!";
  }
  else if (20 < score && score < 26){
    result.innerHTML = "The high intensity exercises are the best fit for you. Go to the activities tab to find these exercises!";
  }
}

function st_art(){
  window.scrollTo(900,900);
}


function scroll_Up(){
  window.scrollTo(0,100);
}


//Event Listeners for buttons
restart.addEventListener("click",re_start);
submit.addEventListener("click",sub_mit);
submit.addEventListener("click",re_sult);
start.addEventListener("click",st_art);
learnMore.addEventListener("click",scroll_Down);
goUp.addEventListener("click",scroll_Up);