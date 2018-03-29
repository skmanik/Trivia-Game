$(document).ready(function() {

// ================== GLOBAL VARIABLES
// ===================================

// array that holds trivia question objects
var questionArr = [
    {
        text: "What is inside the 'Secret Box' that Patrick hides from Spongebob?",
        answer: "o-d",
        options: ["A string", "A cookie for Gary" , "An embarrassing photo of Spongebob at the Christmas Party", "Both A and C"],
    },
    {
        text: "What is the name of Squidward's arch-nemesis from high school band class?",
        answer: "Squilliam Fancyson",
        options: ["Squillard Fancyboat", "Squilliam Fancyson" , "Squillward Tortellini", "Spongebob Squarepants"],
    },
    {
        text: "Spongebob has owned which of the following snails?",
        answer: "Gary, Larry, and Jerry",
        options: ["Gary", "Gary and Larry" , "Gary, Larry, and Jerry", "Gary and Snellie"],
    }
];

// var that remembers what question we're on
var questionIndex = 0;

// var that stores correct answers
var correctA = 0;

// var that stores incorrect answers
var incorrectA = 0;

// function that displays questions on the page
function renderQuestion() {

    if (questionIndex <= (questionArr.length - 1)) {

        // display
        $("#question-panel").text(questionArr[questionIndex].text);
        $("#o-a .opt").text(questionArr[questionIndex].options[0]);
        $("#o-b .opt").text(questionArr[questionIndex].options[1]);
        $("#o-c .opt").text(questionArr[questionIndex].options[2]);
        $("#o-d .opt").text(questionArr[questionIndex].options[3]);
        console.log("Game is still going!")

    }

    else {

        // display
        $("#question-panel").text("Game's over! Try again?");
        $(".o-label").detach();
        $("#o-c .opt").detach();
        $("#o-d .opt").detach();
        $("#o-a .opt").text("Correct answers: " + correctA);
        $("#o-b .opt").text("Incorrect answers: " + incorrectA);
        console.log("Show's over, Spongebob!");

    }

};

// ================== GAME START
// =============================

renderQuestion();

// activates when user selects answer
$(".option-list").on("click", ".list-group-item", function() {

    // turns event off after one performance
    $(".option-list").off("click", ".list-group-item");
    console.log("Answer clicked!");

    // if answer is correct
    if ($(this).attr("id") === questionArr[questionIndex].answer) {

        correctA++;

        // display
        $("#question-panel").text("A: " + questionArr[questionIndex].answer);
        $(this).addClass("correct");
        console.log("Plankton voice: CORRRREECT!");

    }

    // if answer is false
    else {

        incorrectA++;

        // display
        $("#question-panel").text("A: " + questionArr[questionIndex].answer);
        $(this).addClass("incorrect");
        $("#" + questionArr[questionIndex].answer).addClass("correct");
        console.log("Dwight Schrute voice: FALSE!");

    }

});

// document ready closing tag
});