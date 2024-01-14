var countdownDuration = 10;
    var countdownBar = document.getElementById('countdown-bar');
    var countdownText = document.getElementById('countdown-text');

    function updateCountdown() {
      countdownDuration--;
      var newWidth = (countdownDuration / 10) * 100;
      countdownBar.style.width = newWidth + '%';
      countdownText.innerText = countdownDuration + ' seconds';

      if (countdownDuration === 0) {
        clearInterval(countdownInterval);
        countdownText.innerText = 'Countdown Complete!';
      }
    }

    var countdownInterval = setInterval(updateCountdown, 1000);