// Done by Jason
document.addEventListener('DOMContentLoaded', function(){
    const playLink = document.getElementById('playLink');

    function setDifficulty(difficulty) {
        // Remove the 'selected' class from all buttons
        document.getElementById('easyCategory').classList.remove('selected');
        document.getElementById('mediumCategory').classList.remove('selected');
        document.getElementById('hardCategory').classList.remove('selected');

        // Add the 'selected' class to the clicked button
        document.getElementById(difficulty + 'Category').classList.add('selected');

        // Set the href with the selected difficulty
        playLink.href = `game.html?difficulty=${difficulty}`;
    }

    // Alters API URL link based on the buttons chosen to set difficulty
    document.getElementById('easyCategory').addEventListener('click', function() {
        // Change url to easy
        setDifficulty('easy');
    });

    document.getElementById('mediumCategory').addEventListener('click', function() {
        // Change url to medium
        setDifficulty('medium');
    });

    document.getElementById('hardCategory').addEventListener('click', function() {
        // Change url to hard
        setDifficulty('hard');
    });
});
