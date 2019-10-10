const questionsArray = {
    questions: [
        {
            text: 'What is the highest grossing movie of all time?',
            options: ["Avenger's EndGame", 'Avatar', 'Titanic', 'Jurassic World'],
            answer: 'firstAnswer',
            explaination: "The answer was: \"Avenger's EndGame\"",
            questionOrder: 1
        },
        {
            text: 'What is the name of the hobbit played by Elijah Wood in the Lord of the Rings movies?',
            options: ['Legolas', 'Frodo Baggins', 'Gandalf', 'Samwise Gamgee'],
            answer: 'secondAnswer',
            explaination: 'The answer was: "Frodo Baggins"',
            questionOrder: 2
        },
        {
            text: 'Which classic thriller movie stars Roy Schieder as the police chief Martin Brody?',
            options: ['Marathon Man', 'Blue Thunder', 'Sorcerer', 'Jaws'],
            answer: 'fourthAnswer',
            explaination: 'The answer was: "Jaws"',
            questionOrder: 3
        },
        {
            text: 'Which Tom Hanks movie won the Academy Award for Best Picture in 1994?',
            options: ['Cast Away', 'Philadelphia', 'Forrest Gump', 'Apollo 13'],
            answer: 'thirdAnswer',
            explaination: 'The answer was: "Forrest Gump"',
            questionOrder: 4
        },
        {
            text: "Who directed the epic historical drama Schindler's List in 1993 ?",
            options: ['Steven Spielberg', 'Martin Scorsese', 'James Camron', 'Christopher Nolan'],
            answer: 'firstAnswer',
            explaination: 'The answer was: "Steven Spileberg"',
            questionOrder: 5
        }

    ],
    score: 0,
    currentQuestion: 1,

};
// Declaring variables
let questionNumber = questionsArray.currentQuestion;
let score = questionsArray.score;
let questionsArr = questionsArray.questions;

// Start the Quiz
$('#startScreen').on('click', function () {
    $('#startScreen').hide();
    $('#questionsForm').toggle('.hidden');
})
// Displays Question
function displayQuestion() {
    let question;
    if (questionNumber === 6) {
        return finalScore();
    } else {
        questionsArr.map(function (element) {
            if (element.questionOrder === questionNumber) {
                question = element.text;
                $('.js-question').html(question);
            }
        });
    }
};


// Gets the options from the array
function getOptions() {
    let options;
    questionsArr.map(function (element) {
        if (element.questionOrder === questionNumber) {
            options = element.options;
        }
    });
    return options;
};
// Displays the options from the array
function displayOptions(arr) {
    let displayOption = [
        { A: $('.js-answer1').html(arr[0]) },
        { B: $('.js-answer2').html(arr[1]) },
        { C: $('.js-answer3').html(arr[2]) },
        { D: $('.js-answer4').html(arr[3]) },
    ];
};

// If user gets answer right
function correctAnswer() {
    score++;
    $('form').toggle('.hidden');
    $('#js-right').toggle('.hidden');
    $('.js-trackCorrect').html(`${score} of 5 Correct`);
};

// Tells the user they had the incorrect answer and gives the user the correct answer
function wrongAnswer() {
    let answer;
    questionsArr.map(function (element) {
        if (questionNumber === element.questionOrder) {
            answer = element.explaination;
        };
    })
    $('form').toggle('.hidden');
    $('#js-wrong').toggle('hidden');
    $('#js-wrong p').html(`Sorry, ${answer}`);
};

//Iterates to next question and displays the question number
function nextQuestion() {
    $('#js-wrong').on('click', function () {
        questionNumber++;
        displayQuestion();
        displayOptions(getOptions());
        $('#js-wrong').toggle('.hidden');
        $('form').toggle('.hidden');
        $('.js-counter').html(`Question ${questionNumber} of 5`);
    });
    $('#js-right').on('click', function () {
        questionNumber++;
        displayQuestion();
        displayOptions(getOptions());
        $('#js-right').toggle('.hidden');
        $('form').toggle('.hidden');
        $('.js-counter').html(`Question ${questionNumber} of 5`);
    });

}

// get users answer
function displayAnswer() {
    let userAnswer;
    $('.submit').on('click', function (event) {
        userAnswer = $('input:checked').attr("value");
        event.preventDefault();
        questionsArr.map(function (element) {
            if (element.questionOrder === questionNumber) {
                if (userAnswer === element.answer) {
                    return $(correctAnswer());
                } else {
                    return $(wrongAnswer());
                }
            };
        });
    });
};

// Displays the how many questions the user got right and asks the user if they want to restart the quiz
function finalScore() {
    $('form').hide(300);
    $('#js-wrong').hide(300);
    $('#js-right').hide(300);
    $('.js-finalScore').show(300);
    $('.js-finalScore h2').html(`You got ${score} of 5 right!`);
    $('.js-finalScore button').on('click', function () {
        score = 0;
        questionNumber = 1;
        $('.js-trackCorrect').html(`${score} of 5 Correct`);
        $('.js-counter').html(`Question ${questionNumber} of 5`);
        displayQuestion();
        displayOptions(getOptions());
        $('.js-finalScore').hide(300);
        $('#startScreen').show(300);

    })
};

function startQuiz() {
    displayQuestion();
    displayOptions(getOptions());
    nextQuestion();
    displayAnswer();

};
$(startQuiz);

