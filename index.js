const answersArray = {
    answers: [
        { answer1: 'firstAnswer' },
        { answer2: 'ThirdAnswer' },
        { answer3: 'secondAnswer' },
        { answer4: 'fourthAnswer' },
        { answer5: 'firstAnswer' },
    ],

    count: 1,
    countRight: 0,

};

$(function () {
    $('#startScreen').on('click', function () {
        $('#startScreen').toggle('.hidden');
        $('.field1').toggle('.hidden');
    })
})
$(function () {
    $('.field1').on('submit', function (event) {
        event.preventDefault();
        console.log(form);
    })
})


