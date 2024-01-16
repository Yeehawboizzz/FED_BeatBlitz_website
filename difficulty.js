function selectDifficulty(difficulty, button) {
    // Remove the 'selected' class from all buttons
    var buttons = document.querySelectorAll('.left button');
    buttons.forEach(function (btn) {
        btn.classList.remove('selected');
    });

    // Add the 'selected' class to the clicked button
    button.classList.add('selected');

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