$(document).ready(function() {

// ================== GLOBAL VARIABLES
// ===================================

// array that holds trivia question objects
var questionArr = [
    {
        text: "What is inside the 'Secret Box' that Patrick hides from Spongebob?",
        answer: ["o-d", "Both A and C"],
        options: ["A string", "A cookie for Gary" , "An embarrassing photo of Spongebob at the Christmas Party", "Both A and C"],
    },
    {
        text: "What is the name of Squidward's arch-nemesis from high school band class?",
        answer: ["o-b", "Squilliam Fancyson"],
        options: ["Squillard Fancyboat", "Squilliam Fancyson" , "Squillward Tortellini", "Spongebob Squarepants"],
    },
    {
        text: "Spongebob has owned which of the following snails?",
        answer: ["o-c", "Gary, Larry, and Jerry"],
        options: ["Gary", "Gary and Larry" , "Gary, Larry, and Jerry", "Gary and Snellie"],
    }
];

// var that remembers what question we're on
var questionIndex = 0;

// var that stores correct answers
var correctA = 0;

// var that stores incorrect answers
var incorrectA = 0;

// var that stores default timer
var defaultTimer;

// ================== GAME STUFF
// =============================

// function that displays questions on the page
function renderQuestion() {

    // display
    $(".list-group-item").removeClass("correct").removeClass("incorrect");

    // allows options to be selected
    $(".option-list").on("click", ".list-group-item", answerSelected);

    // checks to make sure there are still questions left (if not, proceed to end page)
    if (questionIndex <= (questionArr.length - 1)) {

        // if user sucks and doesn't press anything
        clearTimeout(defaultTimer);

        defaultTimer = setTimeout(function() {

            $(".option-list").off("click", ".list-group-item", answerSelected);

            questionIndex++;
            incorrectA++;
            renderQuestion();

            console.log("Timeout expired", questionIndex);

        }, 3000);

        // display
        $("#question-panel").text(questionArr[questionIndex].text);
        $("#o-a .opt").text(questionArr[questionIndex].options[0]);
        $("#o-b .opt").text(questionArr[questionIndex].options[1]);
        $("#o-c .opt").text(questionArr[questionIndex].options[2]);
        $("#o-d .opt").text(questionArr[questionIndex].options[3]);
        console.log("Game is still going!")

    }

    else {

        // turns option event off
        $(".option-list").off("click", ".list-group-item", answerSelected);

        // display
        $("#question-panel").text("Game's over! Try again?");
        $(".o-label").detach();
        $("#o-c").css({"opacity": "0", "cursor": "default"});
        $("#o-d").css({"opacity": "0", "cursor": "default"});
        $("#o-a .opt").text("Correct answers: " + correctA);
        $("#o-b .opt").text("Incorrect answers: " + incorrectA);
        console.log("Show's over, Spongebob!");

    }

};

function answerSelected() {

    // turns option event off after one performance
    $(".option-list").off("click", ".list-group-item", answerSelected);
    console.log("Answer clicked!");

    // clears default timeout so game doesn't get sad
    clearTimeout(defaultTimer);

    showAnswer($(this));

};

function showAnswer(clicked){

    // if answer is correct
    if (clicked.attr("id") === questionArr[questionIndex].answer[0]) {

        correctA++;

        // display
        $("#question-panel").text("A: " + questionArr[questionIndex].answer[1]);
        clicked.addClass("correct");
        console.log("Plankton voice: CORRRREECT!");

    }

    // if answer is false
    else {

        incorrectA++;

        // display
        $("#question-panel").text("A: " + questionArr[questionIndex].answer[1]);
        clicked.addClass("incorrect");
        $("#" + questionArr[questionIndex].answer).addClass("correct");
        console.log("Dwight Schrute voice: FALSE!");

    }

    setTimeout(function() {

        questionIndex++;
        renderQuestion();

        console.log("Answer displayed", questionIndex);

    }, 3000);

};

renderQuestion();

// document ready closing tag
});