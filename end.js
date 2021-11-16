//had to make a seperate js file for the end page to prevent error

const finalScore = document.querySelector('#finalscore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

finalScore.innerHTML = mostRecentScore;