document.addEventListener('DOMContentLoaded', function(){
    const playLink = document.getElementById('playLink');
    
    document.getElementById('easyCategory').addEventListener('click', function() {
        playLink.href = `game.html?difficulty=easy`; // Set the href with the selected difficulty
    });

    document.getElementById('mediumCategory').addEventListener('click', function() {
        playLink.href = `game.html?difficulty=medium`;
    });

    document.getElementById('hardCategory').addEventListener('click', function() {
        playLink.href = `game.html?difficulty=hard`;
    });
});
