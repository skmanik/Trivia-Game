$(document).ready(function() {

// ================== GLOBAL VARIABLES
// ===================================

// array that holds trivia question objects
var questionArr = [
    {
        text: "What is inside the 'Secret Box' that Patrick hides from Spongebob?",
        answer: "D: Both A and C",
        options: ["A string", "A cookie for Gary" , "An embarrassing photo of Spongebob at the Christmas Party", "Both A and C"],
    },
    {
        text: "What is the name of Squidward's arch-nemesis from high school band class?",
        answer: "B: Squilliam Fancyson",
        options: ["A: Squillard Fancyboat", "B: Squilliam Fancyson" , "C: Squillward Tortellini", "D: Spongebob Squarepants"],
    },
    {
        text: "Spongebob has owned which of the following snails?",
        answer: "C: Gary, Larry, and Jerry",
        options: ["A: Gary", "B: Gary and Larry" , "C: Gary, Larry, and Jerry", "D: Gary and Snellie"],
    }
];

// var that remembers what question we're on
var questionIndex = 0;

// function that renders questions on the page
function renderQuestion() {

    if (questionIndex <= (questionArr.length - 1)) {

        // generates display
        $("#question-panel").text(questionArr[questionIndex].text);
        $("#o-a .opt").text(questionArr[questionIndex].options[0]);
        $("#o-b .opt").text(questionArr[questionIndex].options[1]);
        $("#o-c .opt").text(questionArr[questionIndex].options[2]);
        $("#o-d .opt").text(questionArr[questionIndex].options[3]);

        console.log("Game is still going!")
        
    }

    else {

        console.log("Game over hijo!")
    }

};

// ================== GAME START
// =============================

renderQuestion();

// document ready closing tag

});