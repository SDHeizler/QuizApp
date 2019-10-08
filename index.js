const questionsArray = {
    questions: [
        {
            text: 'What is the highest grossing movie of all time?',
            options: ["Avenger's EndGame", 'Avatar', 'Titanic', 'Jurassic World'],
            answer: 'firstAnswer',
            explaination: "The answer was A: Avenger's EndGame",
            questionOrder: 1
        },
        {
            text: 'What is the name of the hobbit played by Elijah Wood in the Lord of the Rings movies?',
            options: ['Legolas', 'Frodo Baggins', 'Gandalf', 'Samwise Gamgee'],
            answer: 'secondAnswer',
            explaination: 'The answer was B: Frodo Baggins',
            questionOrder: 2
        },
        {
            text: 'Which classic thriller movie stars Roy Schieder as the police chief Martin Brody?',
            options: ['Marathon Man', 'Blue Thunder', 'Sorcerer', 'Jaws'],
            answer: 'fourthAnswer',
            explaination: 'The answer was D: Jaws',
            questionOrder: 3
        },
        {
            text: 'Which Tom Hanks movie won the Academy Award for Best Picture in 1994?',
            options: ['Cast Away', 'Philadelphia', 'Forrest Gump', 'Apollo 13'],
            answer: 'thirdAnswer',
            explaination: 'The answer was C: Forrest Gump',
            questionOrder: 4
        },
        {
            text: "Who directed the epic historical drama Schindler's List in 1993 ?",
            options: ['Steven Spielberg', 'Martin Scorsese', 'James Camron', 'Christopher Nolan'],
            answer: 'firstAnswer',
            explaination: 'The answer was A: Steven Spileberg',
            questionOrder: 5
        }

    ],
    score: 0,
    currentQuestion: 1,

};
// Declaring variables
let questionNumber = questionsArray.currentQuestion;
let score = questionsArray.score;

// gets the questions from the array
// function getQuestion() {
//     let questions;
//     if (questionNumber === 1) {
//         questions = questionsArray.questions[0].text;
//         return $('legend').html(questions);
//     } else if (questionNumber === 2) {
//         questions = questionsArray.questions[1].text;
//         return $('legend').html(questions);
//     } else if (questionNumber === 3) {
//         questions = questionsArray.questions[2].text;
//         return $('legend').html(questions);
//     } else if (questionNumber === 4) {
//         questions = questionsArray.questions[3].text;
//         return $('legend').html(questions);
//     } else {
//         questions = questionsArray.questions[4].text;
//         return $('legend').html(questions);
//     };
// };

function displayQuestion() {
    let question;
    questionsArray.questions.map(function (element) {
        if (element.questionOrder === questionNumber) {
            question = element.text;
            $('legend').html(question);
        }
    });
};


// Gets the options from the array
function getOptions() {
    let options;
    // if (questionNumber === 1) {
    //     options = questionsArray.questions[0].options;
    //     return options;
    // } else if (questionNumber === 2) {
    //     options = questionsArray.questions[1].options;
    //     return options;
    // } else if (questionNumber === 3) {
    //     options = questionsArray.questions[2].options;
    //     return options;
    // } else if (questionNumber === 4) {
    //     options = questionsArray.questions[3].options;
    //     return options;
    // } else {
    //     options = questionsArray.questions[4].options;
    //     return options;
    // }
    questionsArray.questions.map(function (element) {
        if (element.questionOrder === questionNumber) {
            options = element.options;
        };
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
    $('form').toggle('.hidden');
    $('#right').toggle('.hidden');
};
// Tracking how many questions the user get right
function test() {
    $('#right').on('click', function () {
        score++;
    });
};




// If user gets answer wrong
function wrongAnswer() {
    $('form').toggle('.hidden');
    $('#wrong').toggle('hidden');
};





// get users answer
function displayAnswer() {
    let userAnswer;
    let correct;
    $('button').on('click', function (event) {
        userAnswer = $('input:checked').attr("value");
        event.preventDefault();
        // if (questionNumber === 1) {
        //     if (update === questionsArray.questions[0].answer) {
        //         return $(correctAnswer());
        //     } else {
        //         return $(wrongAnswer());
        //     }
        // } if (questionNumber === 2) {
        //     if (update === questionsArray.questions[1].answer) {
        //         return $(correctAnswer());
        //     } else {
        //         return $(wrongAnswer());
        //     }
        // } if (questionNumber === 3) {
        //     if (update === questionsArray.questions[2].answer) {
        //         return $(correctAnswer());
        //     } else {
        //         return $(wrongAnswer());
        //     }
        // } if (questionNumber === 4) {
        //     if (update === questionsArray.questions[3].answer) {
        //         return $(correctAnswer());
        //     } else {
        //         return $(wrongAnswer());
        //     }
        // } if (questionNumber === 5) {
        //     if (update === questionsArray.questions[4].answer) {
        //         return $(correctAnswer());
        //     } else {
        //         return $(wrongAnswer());
        //     }
        // }
        questionsArray.questions.map(function (element) {
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


function startQuiz() {
    displayQuestion();
    displayOptions(getOptions());
    displayAnswer();
    test();

};
$(startQuiz);

