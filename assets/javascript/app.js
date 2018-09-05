

var correct = 0;
var wrong = 0;
var counter = 91;
var click = false;
var intervalId; 


var quizStart = 
    "<h1> In what year did World War II begin? </h1>" +
    "<br>"+
    "<input type='radio' name='q1' value='correct'>" + "1939" + "</input>" + 
    "<br>"+ 
    "<input type='radio' name='q1' value='wrong'>" + "1951" + "</input>" + 
    "<br>"+
    "<input type='radio' name='q1' value='wrong'>" + "1941" + "</input>" + 
    "<br>"+
    "<input type='radio' name='q1' value='wrong'>" + "1918" + "</input>" + 
    "<br>"+
    "<h1> Who was the President of the United States at the end of World War II? </h1>" +
    "<br>"+
    "<input type='radio' name='q2' value='correct'>" + "Harry Truman" + "</input>" + 
    "<br>"+ 
    "<input type='radio' name='q2' value='wrong'>" + "Donald Trump" + "</input>" + 
    "<br>"+
    "<input type='radio' name='q2' value='wrong'>" + "George Washington" + "</input>" + 
    "<br>"+
    "<input type='radio' name='q2' value='wrong'>" + "FDR" + "</input>" + 
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



   


$(document).ready(function () {

    

$("#start").on("click", function () {
$("#questions").append(quizStart); 
   timer();
   $("#start").empty();
   
   


$("#a1").on("click", function () {
   //Does not do anything but for some reason deleting this breaks the submit button
}); 

$("#submit").on("click", function() {
    var result = $('input[type="radio"]:checked');
    if (result.val() === "correct") {
        alert("win");
        correct++;
        console.log("correct: " + correct); //prints number in console but not on page, also need to adjust to it factors in for second question
    }
    else {
       alert("lose");
       wrong++;
       console.log("wrong: " + wrong);
       
    }
    stop();
    $("#questions, #start, #timer").empty();
    $("#questions").append(htmlOver);
});

});

});