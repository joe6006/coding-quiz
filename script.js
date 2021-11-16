//list variables

const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'))
const scoreText = document.querySelector('#score');


let acceptingAnswer = true;
let questionCounter = 0;
let score = 0;
let currentQuestion = {};
let availableQuestions = [];


//add code questions
let questions = [

    {
        question: "Which one of these is a JavaScript package manager",
        choice1:"Node.js",
        choice2:"Typescript", 
        choice3:"npm",
        choice4:"all of the above", 
        
        answer: "3"
    },

    {
        question: "what is '!' used as?",
        choice1:"it is used as 'not'",
        choice2:"For changing language settings", 
        choice3:"creating a function",
        choice4:"a const", 
        
        answer: "1"
    },

    {
        question: "Why do we use semi-colon ",
        choice1:"For changing language settings",
        choice2:"to organize and show when a line of code is done", 
        choice3:"to assign a variable",
        choice4:"as an or statment", 
        
        answer: "2"
    },

    {
        question: "in which of the following events would we use '=='",
        choice1:"to assign a variable",
        choice2:"For changing language settings", 
        choice3:"to make it strict",
        choice4:"type conversion", 
        
        answer: "4"
    },
   
];

const scorePoints = 100;
const maxQuestions = 4;

beginGame = () =>{
    questionCounter = 0;
    score = 0;
    //spread opereator
    availableQuestions= [...questions];
    getNextQuestions();
}

getNextQuestions = () => {
    if (availableQuestions.length === 0 || questionCounter > maxQuestions){
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('end.html');
    }

    questionCounter ++
   

    const questionsI = Math.floor(Math.random() * availableQuestions.length);
     currentQuestion = availableQuestions[questionsI];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice'+ number];
    })

    availableQuestions.splice(questionsI, 1);
    acceptingAnswer = true
}


choices.forEach(choice =>{

    choice.addEventListener('click', e =>{

        if(!acceptingAnswer)return
        acceptingAnswer = false
        const selectChoice = e.target;
        const selectAnswer = selectChoice.dataset['number'];

        let classes = selectAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'
         
        if(classes === 'correct'){
            incrementScore(scorePoints);
        }

        selectChoice.parentElement.classList.add(classes);

        setTimeout(() => {
            selectChoice.parentElement.classList.remove(classes);
            
            getNextQuestions();

        },1000)
        
    })
})

incrementScore = num =>{
    score+= num;
    scoreText.innerText = score;
}


beginGame();

//for the end page
const finalScore = document.querySelector('#finalScore')


