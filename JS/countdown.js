function move() {
  var elem = document.getElementById("countdown-bar");   
  var width = 1;
  var id = setInterval(frame, 400);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
}