$(document).ready(function() {

// ================== GLOBAL VARIABLES
// ===================================

// array that holds trivia question objects
var questionArr = [
    {
        text: "What's inside the 'Secret Box' that Patrick hides from Spongebob?",
        answer: ["o-d", "Both A and C"],
        options: ["A string", "A cookie for Gary" , "An embarrassing photo of Spongebob at the Christmas Party", "Both A and C"],
    },
    {
        text: "What's the name of Squidward's arch-nemesis from high school band class?",
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

// ================== ACTIONS
// ==========================

// function that displays questions on the page
function renderQuestion() {

    // display
    $(".list-group-item").removeClass("correct").removeClass("incorrect");

    // allows options to be selected
    $(".option-list").on("click", ".list-group-item", answerSelected);

    // checks to make sure there are still questions left (if not, proceed to end page)
    if (questionIndex <= (questionArr.length - 1)) {

        // clears default timer so game doesn't explode
        clearTimeout(defaultTimer);

        // lets user see answer and proceed to next question without clicking anything
        defaultTimer = setTimeout(function() {

            // turns option event off to prevent excess clicking
            $(".option-list").off("click", ".list-group-item", answerSelected);

            // shows answer to user
            showAnswerDefault();
            console.log("Timeout expired", questionIndex);

        }, 25000);

        // display
        $("#question-panel").text(questionArr[questionIndex].text);
        $("#o-a .opt").text(questionArr[questionIndex].options[0]);
        $("#o-b .opt").text(questionArr[questionIndex].options[1]);
        $("#o-c .opt").text(questionArr[questionIndex].options[2]);
        $("#o-d .opt").text(questionArr[questionIndex].options[3]);
        console.log("Game is still going!")

    }

    else {

        // turns option event off to prevent excess clicking
        $(".option-list").off("click", ".list-group-item", answerSelected);

        // display
        $("#question-panel").text("Show's over, cheapskate! Play again?");
        $(".o-label").css("display", "none");
        $("#o-c").css({"opacity": "0", "cursor": "default"});
        $("#o-d").css({"opacity": "0", "cursor": "default"});
        $("#o-a .opt").text("Correct answers... " + correctA);
        $("#o-b .opt").text("Incorrect answers... " + incorrectA);
        $(".reset-button").css("display", "inline-block");
        console.log("Show's over, cheapskate!");

        // allows reset button to be pressed
        $(".reset-button").on("click", resetGame);

    }

};

function answerSelected() {

    // turns option event off to prevent excess clicking
    $(".option-list").off("click", ".list-group-item", answerSelected);
    console.log("Answer clicked!");

    // clears default timeout so game doesn't explode
    clearTimeout(defaultTimer);

    // shows answer to user
    showAnswer($(this));

};

// function that displays correct answer when user clicks option; moves onto next q
function showAnswer(clicked){

    // if answer is correct
    if (clicked.attr("id") === questionArr[questionIndex].answer[0]) {

        correctA++;

        // display
        $("#question-panel").html("CORRRRRECT! The answer is... " + "<em>" + questionArr[questionIndex].answer[1] + "</em>");
        clicked.addClass("correct");
        console.log("Plankton voice: CORRRREECT!");

    }

    // if answer is false
    else {

        incorrectA++;

        // display
        $("#question-panel").html("Tartar sauce! The correct answer was... " + "<em>" + questionArr[questionIndex].answer[1] + "</em>");
        clicked.addClass("incorrect");
        $("#" + questionArr[questionIndex].answer).addClass("correct");
        console.log("Dwight Schrute voice: FALSE!");

    }

    // delay on next question so you have time to read answer
    setTimeout(function() {

        questionIndex++;
        renderQuestion();
        console.log("Answer displayed", questionIndex);

    }, 5000);

};

// function that displays correct answer when user doesn't press anything; moves onto next q
function showAnswerDefault () {

    incorrectA++;

    // display
    $("#question-panel").html("Fish paste! The correct answer was... " + "<em>" + questionArr[questionIndex].answer[1] + "</em>");
    $("#" + questionArr[questionIndex].answer).addClass("correct");
    console.log("Dwight Schrute voice: NO ANSWER GIVEN!");

    // delay on next question so you have time to read answer
    setTimeout(function() {

        questionIndex++;
        renderQuestion();

    }, 5000);

};

function resetGame () {

    questionIndex = 0;
    correctA = 0;
    incorrectA = 0;

    // display
    $(".reset-button").css("display", "none");
    $(".list-group-item").css({"opacity": "1", "cursor": "pointer"});
    $(".o-label").css("display", "inline-block");

    renderQuestion();

}

// begins game with first question
renderQuestion();

// document ready closing tag
});