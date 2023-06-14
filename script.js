const questions = [
    {
        question: "1. Cow Milk is a rich source of?",
        options: [
            "Vitamin A",
            "Vitamin B", //* ans
            "Vitamin C",
            "Vitamin D"
        ],
        answer: "Vitamin B"
    },
    {
        question: "2. Name of the first university of India?",
        options: [
            "Nalanda University", //* ans
            "Takshashila University",
            "Jawahar University",
            "Dronacharya University"
        ],
        answer: "Nalanda University"
    },
    {
        question: "3. Where is India's First nuclear centre?",
        options: [
            "Jaipur",
            "Kanpur",
            "Tarapur", //* ans
            "Raipur"
        ],
        answer: "Tarapur"
    },
    {
        question: "4. Name of the first deputy Prime Minister of India?",
        options: [
            "R.N. Shukla",
            "V.R. Gil",
            "Sardar Vallabhbhai Patel", //* ans
            "D.B. Mahawar"
        ],
        answer: "Sardar Vallabhbhai Patel"
    },
    {
        question: "5. Name of the First Indian Prime Minister who resigned from Office?",
        options: [
            "Indira Gandhi",
            "Morarji Desai", //* ans
            "Jawaharlal Nehru",
            "Rajiv Gandhi"
        ],
        answer: "Morarji Desai"
    }
];

const optionsContainer = document.querySelector('.options');
const nextButton = document.querySelector('.next');
let totalPoints = 0;
let questionCounter = 0;
let optionClicked = false; //* global variable to check whether the button is clicked or not. 


const checkAnswer = (eventObj) => {
    if(optionClicked) {
        return;
    }
    const userSelectedOption = eventObj.target;
    const correctAnswer = questions[questionCounter].answer;
    const correctOptionNumber = questions[questionCounter].options.indexOf(correctAnswer);
    const correctOption = document.querySelectorAll('.option')[correctOptionNumber];

    if(userSelectedOption.textContent === correctAnswer) {
        userSelectedOption.style.background = "#138113";
        userSelectedOption.style.color = "#fff";
        totalPoints++;
    }
    else {
        userSelectedOption.style.background = "#cf2020";
        userSelectedOption.style.color = "#fff";
        correctOption.style.background = "#138113";
        correctOption.style.color = "#fff";
    }
    nextButton.style.display = "block";
    optionClicked = true;
    questionCounter++;
}

const displayQuestion = () => {
    const question = document.createElement('p');
    const optionsArray = questions[questionCounter].options;
    question.classList.add('question');
    question.textContent = questions[questionCounter].question;
    optionsContainer.before(question);
    optionsArray.forEach((optionValue) => {
        const option = document.createElement('div');
        option.classList.add('option');
        option.textContent = optionValue;
        optionsContainer.append(option);
    });
    
    //* //////////////////////////////////////////////////////////
    const options = document.querySelectorAll('.option');
    options.forEach((option) => {
        option.addEventListener('click', checkAnswer);
    });
    //* //////////////////////////////////////////////////////////
}

const playAgain = (playAgainButton, finalScoreConatiner) => {
    playAgainButton.addEventListener('click', () => {
        questionCounter = 0;
        totalPoints = 0;
        finalScoreConatiner.remove();
        displayQuestion();
    });
}

const showFinalScore = () => {
    const finalScoreConatiner = document.createElement('div');
    finalScoreConatiner.classList.add('finalScore_Container');
    const winningStatement = document.createElement('p');
    winningStatement.textContent = `You Scored ${totalPoints} of ${questions.length}.`;
    winningStatement.classList.add('winningStatement');
    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'Play Again';
    playAgainButton.classList.add('playAgain');
    finalScoreConatiner.append(winningStatement);
    finalScoreConatiner.append(playAgainButton);
    optionsContainer.append(finalScoreConatiner);

    playAgain(playAgainButton, finalScoreConatiner);
}

const nextQuestion = () => {
    optionClicked = false;
    for(let optionNumber = 1; optionNumber <= 4; optionNumber++) {
        optionsContainer.firstElementChild.remove();
    }
    document.querySelector('.question').remove();
    nextButton.style.display = "none";
    if(questionCounter === questions.length) {
        showFinalScore();
        return;
    }
    displayQuestion();
}

document.addEventListener('DOMContentLoaded', displayQuestion);
nextButton.addEventListener('click', nextQuestion);