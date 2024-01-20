async function fetchLyrics() {
    const url = 'https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=2396871';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4b560486ffmsh569cae16ff8fdebp1b38b9jsn7ec27ebd149e',
            'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json(); // Assuming the API returns JSON
        const lyrics = result.lyrics; // Assuming the lyrics are in a 'lyrics' property

        // Use the lyrics to generate a question
        const question = document.querySelector('.question p');
        const lyricsArray = lyrics.split(' ');
        const blankIndex = Math.floor(Math.random() * lyricsArray.length);
        const correctAnswer = lyricsArray[blankIndex];
        lyricsArray[blankIndex] = '____';
        question.textContent = lyricsArray.join(' ');

        // Use the lyrics to generate answers
        const answers = document.querySelectorAll('.answers');
        const incorrectAnswers = ['stupid', 'okay', 'alright', 'sleeping']; // Replace this with your own logic
        answers.forEach((answerElement, index) => {
            if (index === 0) {
                // The first answer is the correct one
                answerElement.textContent = correctAnswer;
            } else {
                // The other answers are incorrect
                answerElement.textContent = incorrectAnswers[index - 1];
            }

            // Add event listeners to the answers
            answerElement.addEventListener('click', () => {
                // Check if the answer is correct and update the quiz
                if (answerElement.textContent === correctAnswer) {
                    answerElement.style.backgroundColor = 'green';
                } else {
                    answerElement.style.backgroundColor = 'red';
                }
            });
        });
    } catch (error) {
        console.error(error);
    }
}

fetchLyrics();
