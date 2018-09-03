//make buttons have a value, if value equals correct answer add to correct number

var correct = 0;
var wrong = 0;
var counter = 91;
var click = false;
var intervalId; 

var a1 = "1939";
var b1 = "1945";
var correct1 = "1939";

var quizStart = 
    "<h1> In what year did World War II begin? </h1>" +
    "<br>"+
    "<input type='radio' name='q1' id='a1'>" + a1 + "</input>" + 
    "<br>"+ 
    "<input type='radio' name='q1' id='b1'>" + b1 + "</input>" + 
    "<br>"+
    "<button type='submit' id='submit'> Submit </button>";

var htmlOver = 
   "<h1> Results </h1>" +
   "<br>" +
   "<p>Correct Answers: " + correct + "</p>" +
   "<p>Incorrect Answers: " + wrong + "</p>";

function timer () {
    intervalId = setInterval(decrement, 100);
    $("#timer").text("90");
}


function decrement () {
    counter--;
    $("#timer").text(counter)
    if (counter === 0) {
        stop()
        $("#questions, #start, #timer").empty();
        
        $("#questions").append(htmlOver);
    }
}

function stop() {
    clearInterval(intervalId);
}

function resultCheck() {
    if (a1 === correct1) {
        correct++;
    }
}

$(document).ready(function () {



$("#start").on("click", function () {
$("#questions").append(quizStart); 
   timer();
   $("#start").empty();

$("#a1").on("click", function () {
   

}); 

$("#submit").on("click", function() {
    resultCheck();
    stop();
    $("#questions, #start, #timer").empty();
    $("#questions").append(htmlOver);
});

});

});