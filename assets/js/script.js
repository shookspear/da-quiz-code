var timer = 30,
    roundIndex = 0,
    countdown;
    startButton = document.getElementById("start"),
    mainContent = document.getElementById("quiz-area"),
    initialContent = document.getElementById("quiz-desc"),
    highScoreButton = document.getElementById("high-scores");

// Countdown Function
var startTimer = function() {
    countdown = setInterval(() => {

    let timerDisplay = document.getElementById("timer");
    timerDisplay.textContent = "Time: " + timer;

    if (timer <= 0) {
        clearInterval(countdown);
        quizLose();
    }
    timer--;
}, 1000);
}

// Questions and Answers (Multiple Choice)
var questions = [
    ["Javascript is an _______ language?",1,
        ["1. Object-Oriented","2. Object-Based","3. Procedural", "4. Romantic"]
    ],
    ["Which of the following keywords is used to define a variable in Javascript?",3,
        ["1. var","2. let","3. var and let","4. gimp"]
    ],
    ["How can a datatype be declared to be a constant type?",1,
        ["1. const","2. var","3. let","4. constant"]
    ],
    ["Which of the following are not server-side Javascript objects?",1,
        ["1. Date","2. FileUpload","3. Function", "4. All of the above"]
    ],
    ["How do we write a comment in javascript?",2,
        ["1. /* */", "2. //", "3. #", "4. $ $"]
    ],
    ["Which of the following is not a Javascript framework?",4,
        ["1. Node", "2. Vue", "3. React", "4. Cassandra"]
    ]
];

// Quiz code to be completed at a later date