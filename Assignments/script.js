
// ==========================
// QUIZ QUESTIONS
// ==========================

const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Mark Language",
            "Home Tool Markup Language"
        ],
        answer: 0
    },

    {
        question: "Which language is used to style a webpage?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        answer: 1
    },

    {
        question: "Which language adds interactivity to a webpage?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        answer: 2
    }
];


// ==========================
// VARIABLES
// ==========================

let currentQuestion = 0;
let score = 0;
let selectedAnswers = [];


// ==========================
// GET HTML ELEMENTS
// ==========================

const startBtn = document.getElementById("start-btn");

const studentForm = document.getElementById("student-form");

const quizContainer = document.getElementById("quiz-container");

const resultContainer = document.getElementById("result-container");

const nextBtn = document.getElementById("next-btn");

const prevBtn = document.getElementById("prev-btn");

const restartBtn = document.getElementById("restart-btn");


// ==========================
// START QUIZ
// ==========================

startBtn.addEventListener("click", function () {

    console.log("Start button clicked");

    const name = document.getElementById("name").value.trim();

    const rollno = document.getElementById("rollno").value.trim();

    const section = document.getElementById("section").value.trim();


    // Check student details

    if (name === "" || rollno === "" || section === "") {

        document.getElementById("error").innerText =
            "Please enter all details.";

        return;
    }


    // Hide student form

    studentForm.style.display = "none";


    // Show quiz

    quizContainer.style.display = "block";


    // Display first question

    showQuestion();

});


// ==========================
// SHOW QUESTION
// ==========================

function showQuestion() {

    const questionData = questions[currentQuestion];


    document.getElementById("question-number").innerText =
        "Question " +
        (currentQuestion + 1) +
        " of " +
        questions.length;


    document.getElementById("question").innerText =
        questionData.question;


    document.getElementById("score").innerText =
        "Score: " + score;


    const optionsDiv =
        document.getElementById("options");


    // Remove old options

    optionsDiv.innerHTML = "";


    // Create options

    questionData.options.forEach(function (option, index) {

        const button = document.createElement("button");

        button.innerText = option;

        button.classList.add("option");


        if (selectedAnswers[currentQuestion] === index) {

            button.classList.add("selected");

        }


        button.addEventListener("click", function () {

            selectedAnswers[currentQuestion] = index;

            showQuestion();

        });


        optionsDiv.appendChild(button);

    });


    // Previous button

    if (currentQuestion === 0) {

        prevBtn.style.display = "none";

    } else {

        prevBtn.style.display = "block";

    }


    // Last question

    if (currentQuestion === questions.length - 1) {

        nextBtn.innerText = "Submit";

    } else {

        nextBtn.innerText = "Next";

    }

}


// ==========================
// NEXT BUTTON
// ==========================

nextBtn.addEventListener("click", function () {

    if (selectedAnswers[currentQuestion] === undefined) {

        alert("Please select an answer.");

        return;
    }


    if (currentQuestion === questions.length - 1) {

        calculateScore();

        showResult();

    } else {

        currentQuestion++;

        showQuestion();

    }

});


// ==========================
// PREVIOUS BUTTON
// ==========================

prevBtn.addEventListener("click", function () {

    if (currentQuestion > 0) {

        currentQuestion--;

        showQuestion();

    }

});


// ==========================
// CALCULATE SCORE
// ==========================

function calculateScore() {

    score = 0;

    questions.forEach(function (question, index) {

        if (selectedAnswers[index] === question.answer) {

            score++;

        }

    });

}


// ==========================
// SHOW RESULT
// ==========================

function showResult() {

    quizContainer.style.display = "none";

    resultContainer.style.display = "block";


    const name =
        document.getElementById("name").value;


    document.getElementById("student-name").innerText =
        "Student: " + name;


    document.getElementById("final-score").innerText =
        "Your Score: " +
        score +
        " / " +
        questions.length;

}


// ==========================
// RESTART
// ==========================

restartBtn.addEventListener("click", function () {

    currentQuestion = 0;

    score = 0;

    selectedAnswers = [];


    resultContainer.style.display = "none";

    studentForm.style.display = "block";


    document.getElementById("name").value = "";

    document.getElementById("rollno").value = "";

    document.getElementById("section").value = "";

    document.getElementById("error").innerText = "";

});
