function selectDifficulty(difficulty) {
    // Store the selected difficulty in sessionStorage
    sessionStorage.setItem('difficulty', difficulty);
}

function playNow() {
    // Retrieve the selected difficulty from sessionStorage
    var difficulty = sessionStorage.getItem('difficulty');

    // Check the selected difficulty and redirect accordingly
    if (difficulty === 'easy') {
        window.location.href = 'easymode.html';
    } else if (difficulty === 'hard') {
        window.location.href = 'hardmode.html';
    } else {
        // Handle default case (no difficulty selected)
        alert('Please select a difficulty first.');
    }
}