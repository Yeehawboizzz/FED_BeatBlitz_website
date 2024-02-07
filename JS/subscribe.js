// Set variable for messageType
let messageType;

// Eventlistener to detect submission or clicking of buttons
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submitButton').addEventListener('click', function () {
        // Get email input
        let emailInput = document.getElementById('emailInput').value;
            
        // Validate email format using a regular expression
        let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        
        // Define different scenarios based on different inputs
        if (emailRegex.test(emailInput) && emailInput != '') {
            showMessage("Thank you for subscribing!", ' success');
        } else if (emailInput.trim()===""){
            showMessage('Please enter your email.', ' error');
        } else {
            showMessage('Invalid format. Please enter a valid email address', ' error');
        }
    });

    // Function to define the display of content of the message
    function showMessage(message, messageType) {
        let messageBoxes = document.getElementsByClassName('confirmation');
        let messageBox = messageBoxes[0];
        messageBox.textContent = message;
        messageBox.className = 'confirmation ' + messageType;
        messageBox.style.display = 'block';

        // Function to disappear after 5s
        setTimeout(function () {
            messageBox.style.display = 'none';
        }, 5000); 
    }
});