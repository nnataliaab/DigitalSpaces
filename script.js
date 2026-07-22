// Quiz interaction

const quizButtons = document.querySelectorAll(".quizOption");
const quizResult = document.getElementById("quizResult");

quizButtons.forEach(button => {

    button.addEventListener("click", function() {

        quizResult.textContent =
        "Great choice! Digital spaces help people connect, learn, and build communities.";

    });

});