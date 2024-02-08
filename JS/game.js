// Done by Jason and YeeHen
document.addEventListener('DOMContentLoaded', function(){
    // Get all the elements that changes according to quiz progress
    const _question = document.getElementById('question');
    const _options = document.querySelector('.quiz-options');
    const _checkBtn = document.getElementById('check-answer');
    const _backHomeBtn = document.getElementById('back-home');
    const _result = document.getElementById('result');
    const _resultAnimation = document.getElementById('result-animation-container');
    const _correctScore = document.getElementById('correct-score');
    const _totalQuestion = document.getElementById('total-question');

    // Defining quiz count and score count
    let correctAnswer = "", correctScore = askedCount = 0, totalQuestion = 10;

    // Get the difficulty chosen from JS/difficulty.js
    const queryParams = new URLSearchParams(window.location.search);
    // Default to 'medium' if not provided
    const difficulty = queryParams.get('difficulty') || 'medium';

    // Store questions from API
    let questions = []; // Array to store the questions
    let currentQuestionIndex = 0; // Index to track the current question
    
    // Function to fetch data from API
    async function fetchData() {
        const APIUrl = `https://opentdb.com/api.php?amount=10&category=12&difficulty=${difficulty}&type=multiple`;
        const result = await fetch(APIUrl);
        const data = await result.json();
        return data.results;
    }
    
    // Function to process data
    function processData(question) {
        _result.innerHTML = "";
        showQuestion(question);
    }
    
    // Function to load question
    async function loadQuestion() {
        try {
            // If questions array is empty, fetch data from API
            if (questions.length === 0) {
                questions = await fetchData();
                console.log(questions);
            }
            // If there are questions in the array, process the next question
            if (questions.length > 0) {
                processData(questions[currentQuestionIndex]);
                currentQuestionIndex++;
                // If all questions have been processed, clear the questions array
                if (currentQuestionIndex >= questions.length) {
                    questions = [];
                    currentQuestionIndex = 0;
                }
            } else {
                // Show the error in the console for debugging purpose
                console.error('No questions found in the API response.');
            }
        } catch (error) {
            // Show the error in the console for debugging purpose
            console.error('Error parsing JSON from the API response.', error);
        }
    }
    
function eventListeners(){
    // Event Listener
    _checkBtn.addEventListener('click', checkAnswer);
    _backHomeBtn.addEventListener('click', backHome);
}

document.addEventListener('DOMContentLoaded', function(){
    // Load quiz
    loadQuestion();
    eventListeners();
    _totalQuestion.textContent = totalQuestion;
    _correctScore.textContent = correctScore;
});


// Display question and options
function showQuestion(data){
    // Defining correct and wrong answers
    _checkBtn.disabled = false;
    correctAnswer = data.correct_answer;
    let incorrectAnswer = data.incorrect_answers;
    let optionsList = incorrectAnswer;
    optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);
    // Show correct answer in console for debugging purpose
    console.log(correctAnswer);

    // Display of questions and options
    _question.innerHTML = `${data.question}`;
    _options.innerHTML = `
        ${optionsList.map((option, index) => `
            <li> ${index + 1}. <span>${option}</span> </li>
        `).join('')}
    `;
    selectOption();
}

// Options selection effect
function selectOption(){
    _options.querySelectorAll('li').forEach(function(option){
        option.addEventListener('click', function(){
            if(_options.querySelector('.selected')){
                const activeOption = _options.querySelector('.selected');
                activeOption.classList.remove('selected');
            }
            option.classList.add('selected');
        });
    });
}

// Answer checking
function checkAnswer(){
    _checkBtn.disabled = true;
    if(_options.querySelector('.selected')){
        let selectedAnswer = _options.querySelector('.selected span').textContent;
        // Correct answer validation
        if(selectedAnswer == HTMLDecode(correctAnswer)){
            correctScore++;
            _result.innerHTML = `<p><i class = "fas fa-check"></i>Correct Answer!</p>`;
        } else {
            _result.innerHTML = `<p><i class = "fas fa-times"></i>Incorrect Answer!</p> <small><b>Correct Answer: </b>${correctAnswer}</small>`;
        }
        checkCount();
    } else {
        // No option selected validation
        _result.innerHTML = `<p><i class = "fas fa-question"></i>Please select an option!</p>`;
        _checkBtn.disabled = false;
    }
}

// To convert html entities into normal text of correct answer if there is any
function HTMLDecode(textString) {
    let doc = new DOMParser().parseFromString(textString, "text/html");
    return doc.documentElement.textContent;
}

// Check question count, load another question and display result
function checkCount(){
    askedCount++;
    setCount();
    if(askedCount == totalQuestion){
        setTimeout(function(){
            console.log("");
        }, 5000);

        // Display of result
        _result.innerHTML += `<p>Not bad. Your score is ${correctScore}.</p>`;
        // If score >= 7, lottie animation will display
        if (correctScore >= 7){
            _resultAnimation.style.display = "block";
            setTimeout(function(){
                _resultAnimation.style.display = "none";
            }, 10000);
        }
        _backHomeBtn.style.display = "block";
        _checkBtn.style.display = "none";
    } else {
        // Load question if question count not 10 yet
        setTimeout(function(){
            loadQuestion();
        }, 3000);
    }
}

function setCount(){
    _totalQuestion.textContent = totalQuestion;
    _correctScore.textContent = correctScore;
}

// Button to go back to Main Menu
function backHome(){
    window.location.href = 'game_home.html';
}

loadQuestion();
    eventListeners();
    _totalQuestion.textContent = totalQuestion;
    _correctScore.textContent = correctScore;
});

