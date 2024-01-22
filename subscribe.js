// set variable for messageType
var messageType;

// use eventlistener to detect submission or clicking of buttons
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submitButton').addEventListener('click', function () {
        // get email and password input
        var emailInput = document.getElementById('emailInput').value;
            
        // validate email and password format using a regular expression
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        
        // define different scenarios based on correct and wrong inputs
        if (emailRegex.test(emailInput) && emailInput != '') {
            showMessage("Thank you for subscribing!", ' success');
        } else if (emailInput.trim()===""){
            showMessage('Please enter your email.', ' error');
        } else {
            showMessage('Invalid format. Please enter a valid email address', ' error');
        }
    });

    // function to define the display of content of the message
    function showMessage(message, messageType) {
        var messageBoxes = document.getElementsByClassName('confirmation');
        var messageBox = messageBoxes[0];
        messageBox.textContent = message;
        messageBox.className = 'confirmation ' + messageType;
        messageBox.style.display = 'block';

        setTimeout(function () {
            messageBox.style.display = 'none';
        }, 5000); 
    }
});