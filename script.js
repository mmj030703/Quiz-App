//? /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* First Way :: Inserting Quiz Structure with every new question.
// const questions = [
//     {
//         question: "1. Cow Milk is a rich source of?",
//         options: [
//             "Vitamin A",
//             "Vitamin B", //* ans
//             "Vitamin C",
//             "Vitamin D"
//         ],
//         answer: "Vitamin B",
//         answerOptionNumber: 2
//     },
//     {
//         question: "2. Name of the first university of India?",
//         options: [
//             "Nalanda University", //* ans
//             "Takshashila University",
//             "Jawahar University",
//             "Dronacharya University"
//         ],
//         answer: "Nalanda University",
//         answerOptionNumber: 1
//     },
//     {
//         question: "3. Where is India's First nuclear centre?",
//         options: [
//             "Jaipur",
//             "Kanpur",
//             "Tarapur", //* ans
//             "Raipur"
//         ],
//         answer: "Tarapur",
//         answerOptionNumber: 3
//     },
//     {
//         question: "4. Name of the first deputy Prime Minister of India?",
//         options: [
//             "R.N. Shukla",
//             "V.R. Gil",
//             "Sardar Vallabhbhai Patel", //* ans
//             "D.B. Mahawar"
//         ],
//         answer: "Sardar Vallabhbhai Patel",
//         answerOptionNumber: 3
//     },
//     {
//         question: "5. Name of the First Indian Prime Minister who resigned from Office?",
//         options: [
//             "Indira Gandhi",
//             "Morarji Desai", //* ans
//             "Jawaharlal Nehru",
//             "Rajiv Gandhi"
//         ],
//         answer: "Morarji Desai",
//         answerOptionNumber: 2
//     }
// ];

// const optionsContainer = document.querySelector('.options');
// const nextButton = document.querySelector('.next');
// let totalPoints = 0;              //* To calculate total points scored by user
// let questionCounter = 0;          //* Indicates the number of question


// const styleOptionElement = (option, bgColor) => {
//     option.style.background = bgColor;
//     option.style.color = "#fff";
// }

// const checkAnswer = (eventObj) => {
//     const options = document.querySelectorAll('.option');
//     const userSelectedOption = eventObj.target;
//     const correctOption = options[questions[questionCounter].answerOptionNumber - 1];

//     if (userSelectedOption.textContent === correctOption.textContent) {
//         totalPoints++;
//     }
//     else {
//         styleOptionElement(userSelectedOption, "#cf2020");
//     }
//     styleOptionElement(correctOption, "#138113");

//     options.forEach((option) => {
//         option.style.pointerEvents = "none";
//     });

//     nextButton.style.display = "block";
//     questionCounter++;
// }

// const addClickEventToOption = (optionElements) => {
//     optionElements.forEach((optionElement) => {
//         optionElement.addEventListener('click', checkAnswer);
//     });
// }

// const displayQuestion = () => {
//     //* Creating a paragrapgh element to insert question in DOM
//     const question = document.createElement('p');
//     question.classList.add('question');
//     question.textContent = questions[questionCounter].question;
//     optionsContainer.before(question);

//     //* Creating a div elements to insert options in DOM
//     const options = questions[questionCounter].options;
//     options.forEach((option) => {
//         const optionElement = document.createElement('div');
//         optionElement.classList.add('option');
//         optionElement.textContent = option;
//         optionsContainer.append(optionElement);
//     });

//     //* Fuction Call for adding Click Event to every option
//     addClickEventToOption(document.querySelectorAll('.option'));
// }

// const playAgain = (playAgainButton, finalScoreConatiner) => {
//     playAgainButton.addEventListener('click', () => {
//         questionCounter = 0;
//         totalPoints = 0;
//         finalScoreConatiner.remove();
//         displayQuestion();
//     });
// }

// const showFinalScore = () => {
//     //* Creating container to put final score statement and play again button 
//     const finalScoreConatiner = document.createElement('div');
//     finalScoreConatiner.classList.add('finalScore_Container');

//     //* Creating final score statement
//     const finalScoreStatement = document.createElement('p');
//     finalScoreStatement.textContent = `You Scored ${totalPoints} of ${questions.length}.`;
//     finalScoreStatement.classList.add('finalScoreStatement');
    
//     //* Creating play again button
//     const playAgainButton = document.createElement('button');
//     playAgainButton.textContent = 'Play Again';
//     playAgainButton.classList.add('playAgain');
    
//     //* Appending final score statement and play again button in final score container
//     finalScoreConatiner.append(finalScoreStatement);
//     finalScoreConatiner.append(playAgainButton);
    
//     //* Appending final score container in options container
//     optionsContainer.append(finalScoreConatiner);

//     //* calls function when user wants to play the same quiz again 
//     playAgain(playAgainButton, finalScoreConatiner);
// }

// const nextQuestion = () => {
//     //* removing question from DOM before moving to next question
//     document.querySelector('.question').remove();

//     //* removing option from DOM before moving to next question
//     for (let optionNumber = 1; optionNumber <= 4; optionNumber++) {
//         optionsContainer.firstElementChild.remove();
//     }

//     //* hiding the next button before moving to next question
//     nextButton.style.display = "none";

//     //* If user has answered all the questions then show him/her the final score scored by him/her
//     if (questionCounter === questions.length) {
//         showFinalScore();
//         return;
//     }

//     //* If the user has not answered all the questions then move to next question
//     displayQuestion();
// }

// document.addEventListener('DOMContentLoaded', displayQuestion);
// nextButton.addEventListener('click', nextQuestion);

//? /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Second Way :: Manipulating Quiz Structure's text content for every new question.
 
//* questions array for storing all questions in separate objects
const questions = [
    {
        question: "1. Cow Milk is a rich source of?",
        options: [
            "Vitamin A",
            "Vitamin B", //* ans
            "Vitamin C",
            "Vitamin D"
        ],
        answer: "Vitamin B",
        answerOptionNumber: 2
    },
    {
        question: "2. Name of the first university of India?",
        options: [
            "Nalanda University", //* ans
            "Takshashila University",
            "Jawahar University",
            "Dronacharya University"
        ],
        answer: "Nalanda University",
        answerOptionNumber: 1
    },
    {
        question: "3. Where is India's First nuclear centre?",
        options: [
            "Jaipur",
            "Kanpur",
            "Tarapur", //* ans
            "Raipur"
        ],
        answer: "Tarapur",
        answerOptionNumber: 3
    },
    {
        question: "4. Name of the first deputy Prime Minister of India?",
        options: [
            "R.N. Shukla",
            "V.R. Gil",
            "Sardar Vallabhbhai Patel", //* ans
            "D.B. Mahawar"
        ],
        answer: "Sardar Vallabhbhai Patel",
        answerOptionNumber: 3
    },
    {
        question: "5. Name of the First Indian Prime Minister who resigned from Office?",
        options: [
            "Indira Gandhi",
            "Morarji Desai", //* ans
            "Jawaharlal Nehru",
            "Rajiv Gandhi"
        ],
        answer: "Morarji Desai",
        answerOptionNumber: 2
    }
];

const question = document.querySelector('.question');
const options = document.querySelectorAll('.option');
const nextButton = document.querySelector('.next');

let currentQuestionIndex = 0;       //* Indicates the index of current question
let score = 0;                      //* To calculate total points scored by user    


//* Checks and compares the user input with correct answer and styles the correct and user selected options accordingly
const checkAnswer = (eventObj) => {
    const userSelectedOption = eventObj.target;
    const correctOption = options[questions[currentQuestionIndex].answerOptionNumber-1];
    
    if(userSelectedOption.textContent === correctOption.textContent) {
        score++;
    }
    else {
        userSelectedOption.classList.add('incorrect');
    }
    correctOption.classList.add('correct');
    options.forEach((option) => {
        option.style.pointerEvents = "none";
    });
    nextButton.style.display = "block";
    currentQuestionIndex++;
}

//* Fuction for adding Click Event to every option
const addClickEventToOption = () => {
    options.forEach((option) => {
        option.removeEventListener('click', checkAnswer);
        option.addEventListener('click', checkAnswer);
    });
}

//* Function to start the quiz
const startQuiz = () => {
    const currentQuestionObj = questions[currentQuestionIndex];
    question.textContent = currentQuestionObj.question;
    for(let i = 0; i < 4; i++) {
        options[i].textContent = currentQuestionObj.options[i];
    }
    addClickEventToOption();
}

startQuiz();

//* Function to reset the previous question like hiding the next button, etc.
const resetPreviousQuestion = () => {
    nextButton.style.display = "none";
    options.forEach((option) => {
        option.style.display = "block";
        option.classList.remove('correct');
        option.classList.remove('incorrect');
        option.style.pointerEvents = "all";
    });
}

//* Function to show final score to user
const showFinalScore = () => {
    question.textContent = `Your Score is ${score} of ${questions.length}`;
    options.forEach((option) => {
        option.style.display = "none";
    })
    nextButton.textContent = 'Play Again';
    nextButton.style.display = "block";
    nextButton.style.margin = "2rem 0 0rem";
    nextButton.addEventListener('click', resetQuiz);
}

//* Function to reset the quiz to it's initial state
const resetQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
    options.forEach((option) => {
        option.style.display = "block";
    });
    nextButton.textContent = "Next";
    nextButton.style.display = "none";
    nextButton.style.margin = "0rem";
    nextButton.removeEventListener('click', resetQuiz);
    startQuiz();
}

//* Function to show the next question
const showNextQuestion = () => {
    console.log(currentQuestionIndex);
    resetPreviousQuestion();
    
    if(currentQuestionIndex < questions.length) {
        startQuiz(); 
    }
    else {
        showFinalScore();
    }
}
 
nextButton.addEventListener('click', showNextQuestion);