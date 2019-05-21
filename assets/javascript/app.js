
// Need to create a function to pull questions and answers.
// With the way it is coded, all someone would have to do is just add
// the key and values in this object, the update another Q# in the arry
// for that question to be part of the quiz.

var questionValues = {
    Q1: {
        Question: "What Year was Nintendo founded?",
        Answers: {
            Ans0: '1889',
            Ans1: '1910',
            Ans2: '1951',
            Ans3: '1968',
            },
        CorrectAnswer: 0,
        RevealAns: "Nintendo was founded in 1889; almost a century before making the Famicon",
        Image: "<img src= 'assets/images/nintendo1889.jpg' width = 90% height = auto>"
    },

    Q2: {
        Question: "What was the first product Nintendo made?",
        Answers: {
            Ans0: 'Nintendo Entertainment System',
            Ans1: 'Ultra Hand',
            Ans2: 'Playing Cards',
            Ans3: 'Love Tester',
            },
        CorrectAnswer: 2,
        RevealAns: "Nintendo's first product were playing cards.",
        Image: "<img src= 'assets/images/nintendocard.jpg'>",
    },

    Q3: {
        Question: "What do many consider 'Nintendo' to translate to in English?",
        Answers: {
            Ans0: 'Seize the Day',
            Ans1: 'To the Wayward Sky',
            Ans2: 'Heir of the Sun',
            Ans3: 'Leave Luck to Heaven',
            },
        CorrectAnswer: 3,
        RevealAns: "It is widely considered to mean 'Leave Luck to Heaven'.",
        Image: "<img src= 'assets/images/leaveluck.jpg'>"
    },

    Q4: {
        Question: "What was Nintendo's first portable console known as?",
        Answers: {
            Ans0: 'Gameboy',
            Ans1: 'Gamegear',
            Ans2: 'Game and Watch',
            Ans3: 'Famicon',
            },
        CorrectAnswer: 2,
        RevealAns: "Game and Watch was Nintendo's first portable gaming device. Do any of the designs look a little familiar?",
        Image: "<img src= 'assets/images/gameandwatch.jpg' width = 90% height = auto>",
    },

    Q5: {
        Question: "What series did Shigeru Miyamoto not direactly create or inspire?",
        Answers: {
            Ans0: 'Donkey Kong',
            Ans1: 'Pokemon',
            Ans2: 'Mario',
            Ans3: 'Pikmin',
        },
        CorrectAnswer: 1,
        RevealAns: "Pokemon, one of Nintendo's most popular franchises, was created and still developed by Game Freak.",
        Image: "<img src= 'assets/images/game-freak.jpg' width = 75% height = auto>",
    },

    Q6: {
        Question: "Counting all iterations, including the Gameboy Color (though not the Advance), when did production of the original Gameboy end?",
        Answers: {
            Ans0: '1999',
            Ans1: '2003',
            Ans2: '2000',
            Ans3: '1998',
        },
        CorrectAnswer: 1,
        RevealAns: "The Gameboy line was in production from 1989 till 2003. It was succeeded by the Gameboy Advance.",
        Image: "<img src= 'assets/images/gameboy.jpg'>",
    },

    Q7: {
        Question: "What was the first game that Miyamoto directed?",
        Answers: {
            Ans0: 'Donkey Kong',
            Ans1: 'Mario Brothers',
            Ans2: 'Legend of Zelda',
            Ans3: 'Game and Watch',
        },
        CorrectAnswer: 0,
        RevealAns: "Donkey Kong was Miyamoto's first game he directed. He is credited with creating other popular franchises, like Zelda and Mario.",
        Image: "<img src= 'assets/images/miyamoto.jpg'>",
    },
    
    Q8: {
        Question: "Who was the female that was kidnapped in the original Donkey Kong?",
        Answers: {
            Ans0: 'Daisy',
            Ans1: 'Peach',
            Ans2: 'Dixie',
            Ans3: 'Pauline',
        },
        CorrectAnswer: 3,
        RevealAns: "Pauline was Nintendo's original damsel in distress. As of Mario Odyssey, she is the mayor of New Donk City.",
        Image: "<img src= 'assets/images/pauline.png' height=333px width=160px>",
    },

    Q9: {
        Question: "What was the cancelled console that Nintendo and Sony collaborated on?",
        Answers: {
            Ans0: 'Sony CDI',
            Ans1: 'Satellaview',
            Ans2: 'SNES-CD',
            Ans3: '64DD',
        },
        CorrectAnswer: 2,
        RevealAns: "Though their partnership was very brief, it's widely believed it helped Sony move into the videogame industry.",
        Image: "<img src= 'assets/images/SNESCD.jpg'>",
    },

    Q10: {
        Question: "What Nintendo franchise is believed to have been inspired by Alien?",
        Answers: {
            Ans0: 'Metroid',
            Ans1: 'Kid Icuras',
            Ans2: 'Pikmin',
            Ans3: 'Mother',
        },
        CorrectAnswer: 0,
        RevealAns: "Some similarities include a female lead, alien monsters that latch on to faces, characters with the name Mother, and even a villain named 'Ridley'.",
        Image: "<img src= 'assets/images/samus.png' height = 387px width = 227px>",
    },
    
    
}

// setting global variables
var questionArray = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9','Q10']
var score = 0;
var count = 0;
var timer = 30;
var interval;
var answerVal = null
var result = null

// setting the timer
function run() {
$("#timer").html("<h1>" + timer + "</h1>")
clearInterval(interval)
interval = setInterval(thirtySeconds,1000)
}

// setting the function to display timer
function thirtySeconds() {
timer--
$("#timer").html("<h1>" + timer + "</h1>")

if (timer === 0) {
    displayAnswer()
    }
}

// clears interval if time runs out
function stop() {
    clearInterval(interval)
    $("#timer").html("<h1>" + timer + "</h1>")
}

function populateQuestion() {
    answerVal = null
    run()
    $("#timer").show()

    let nextQuestion = questionArray[count]
    let selectedQuestion = questionValues[nextQuestion]

    let questionBox = $("<div id = 'testQuestions' class = text-center>")
    let question = $("<h2 class = 'question text-danger'>").text(selectedQuestion.Question)  
    let ans0 = $("<button class = 'list-group-item list-group-item-action text-center bg-secondary text-white mb-3 listofAnswers' type = 0>").text(selectedQuestion.Answers.Ans0)
    let ans1 = $("<button class = 'list-group-item list-group-item-action text-center bg-secondary text-white mb-3 listofAnswers' type = 1>").text(selectedQuestion.Answers.Ans1)
    let ans2 = $("<button class = 'list-group-item list-group-item-action text-center bg-secondary text-white mb-3 listofAnswers' type = 2>").text(selectedQuestion.Answers.Ans2)
    let ans3 = $("<button class = 'list-group-item list-group-item-action text-center bg-secondary text-white mb-3 listofAnswers' type = 3>").text(selectedQuestion.Answers.Ans3)

    $(question).appendTo($(questionBox))
    $(ans0).appendTo($(questionBox))
    $(ans1).appendTo($(questionBox))
    $(ans2).appendTo($(questionBox))
    $(ans3).appendTo($(questionBox))

    $("#questions").append(questionBox)
}

// global click command for answers

$(document).on("click", "button.listofAnswers", function() {
    answerVal = parseInt($(this).attr('type'))
    displayAnswer()
})

// display answer based on what user chooses
function displayAnswer() {
    var nextQuestion = questionArray[count]
    var selectedQuestion = questionValues[nextQuestion]

    stop()
    $("#timer").hide()
    $("#questions").empty()

    count++

    if(timer === 0){
        var result = "Time's Up!"
    }

    else if(answerVal === selectedQuestion.CorrectAnswer){
        score++
        var result = "Correct"
    }

    else {
        var result = "Incorrect"
    }

    let answerBox = $("<div id = Answer class = 'text-center text-danger'>")
    let outcome = $("<h2 id = outcome class = 'text-center text-danger'>").text(result)
    let ansDesc = $("<p id = ansDesc class = 'text-center text-danger'>").text(selectedQuestion.RevealAns)
    let ansPic = $("<div class = 'text-center text-danger'>").html(selectedQuestion.Image)
    let nextBtn = $("<button id = nextBtn type = button class = 'btn btn-dark btn-outline-danger btn-lg mt-3'>").text("Next")

    $(outcome).appendTo(answerBox)
    $(ansDesc).appendTo(answerBox)
    $(ansPic).appendTo(answerBox)
    $(nextBtn).appendTo(answerBox)

    $("#questions").append(answerBox)  
}

// button to go to next question
$(document).on("click", "#nextBtn", function() {
    result = null
    timer = 30
    $("#questions").empty()
    
    if(count === questionArray.length) {
        gameOver()
    }

    else{
        populateQuestion()
    }
})

// last page with results, ending the quiz
function gameOver() {
    result = null
    count = 0
    $("#questions").empty()
    let endofGame = $("<h2 id = final class = 'text-danger'>").text("Thank you for playing. Your final score was " + score + " out of " + questionArray.length + "!")
    let startOver =  $("<button id = startOver class = 'btn btn-dark btn-outline-danger btn-lg mt-3'>").text("Play Again!")
    
    $("#questions").append(endofGame)
    $("#questions").append(startOver)
}

// resets the quiz
$(document).on("click", "#startOver", function(){
    score = 0
    timer = 30
    $("#questions").empty()
    $("#start").show()
})

// start and run game.
$("#start").on("click", function() {
$("#timer").html("<h1>" + timer + "</h1>")
$("#start").hide()
populateQuestion()

})