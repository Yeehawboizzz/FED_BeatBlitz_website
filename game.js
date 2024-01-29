document.addEventListener('DOMContentLoaded', function(){
    const _question = document.getElementById('question');
    const _options = document.querySelector('.quiz-options');
    const _checkBtn = document.getElementById('check-answer');
    const _backHomeBtn = document.getElementById('back-home');
    const _result = document.getElementById('result');
    const _correctScore = document.getElementById('correct-score');
    const _totalQuestion = document.getElementById('total-question');

    let correctAnswer = "", correctScore = askedCount = 0, totalQuestion = 10;

    const queryParams = new URLSearchParams(window.location.search);
    const difficulty = queryParams.get('difficulty') || 'medium'; // Default to 'medium' if not provided

    // load question from API
    async function loadQuestion() {
        const APIUrl = `https://opentdb.com/api.php?amount=1&category=12&difficulty=${difficulty}&type=multiple`;
        const result = await fetch(APIUrl);

        try {
            const data = await result.json();
            console.log(data)
            // Check if data.results exists and has at least one item
            if (data.results && data.results.length > 0) {
                _result.innerHTML = "";
                showQuestion(data.results[0]);
            } else {
                console.error('No questions found in the API response.');
                // You might want to handle this case, such as showing an error message or taking appropriate action.
            }
        } catch (error) {
            console.error('Error parsing JSON from the API response.', error);
            // Handle the error, for example, show an error message or take appropriate action.
        }
    }

// event listeners
function eventListeners(){
    _checkBtn.addEventListener('click', checkAnswer);
    _backHomeBtn.addEventListener('click', backHome);
}

document.addEventListener('DOMContentLoaded', function(){
    loadQuestion();
    eventListeners();
    _totalQuestion.textContent = totalQuestion;
    _correctScore.textContent = correctScore;
});


// display question and options
function showQuestion(data){
    _checkBtn.disabled = false;
    correctAnswer = data.correct_answer;
    let incorrectAnswer = data.incorrect_answers;
    let optionsList = incorrectAnswer;
    optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);
    // console.log(correctAnswer);

    
    _question.innerHTML = `${data.question} <br> <span class = "category"> ${data.category} </span>`;
    _options.innerHTML = `
        ${optionsList.map((option, index) => `
            <li> ${index + 1}. <span>${option}</span> </li>
        `).join('')}
    `;
    selectOption();
}


// options selection
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

// answer checking
function checkAnswer(){
    _checkBtn.disabled = true;
    if(_options.querySelector('.selected')){
        let selectedAnswer = _options.querySelector('.selected span').textContent;
        if(selectedAnswer == HTMLDecode(correctAnswer)){
            correctScore++;
            _result.innerHTML = `<p><i class = "fas fa-check"></i>Correct Answer!</p>`;
        } else {
            _result.innerHTML = `<p><i class = "fas fa-times"></i>Incorrect Answer!</p> <small><b>Correct Answer: </b>${correctAnswer}</small>`;
        }
        checkCount();
    } else {
        _result.innerHTML = `<p><i class = "fas fa-question"></i>Please select an option!</p>`;
        _checkBtn.disabled = false;
    }
}

// to convert html entities into normal text of correct answer if there is any
function HTMLDecode(textString) {
    let doc = new DOMParser().parseFromString(textString, "text/html");
    return doc.documentElement.textContent;
}


function checkCount(){
    askedCount++;
    setCount();
    if(askedCount == totalQuestion){
        setTimeout(function(){
            console.log("");
        }, 5000);


        _result.innerHTML += `<p>Your score is ${correctScore}.</p>`;
        _backHomeBtn.style.display = "block";
        _checkBtn.style.display = "none";
    } else {
        setTimeout(function(){
            loadQuestion();
        }, 300);
    }
}

function setCount(){
    _totalQuestion.textContent = totalQuestion;
    _correctScore.textContent = correctScore;
}


function backHome(){
    window.location.href = 'game_home.html';
}

loadQuestion();
    eventListeners();
    _totalQuestion.textContent = totalQuestion;
    _correctScore.textContent = correctScore;
});

