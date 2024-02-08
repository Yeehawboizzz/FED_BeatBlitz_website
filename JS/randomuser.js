// Done by YeeHen and Jason
document.addEventListener('DOMContentLoaded', function() {
  const url = 'https://randomuser.me/api/';

  // Function for different element id
  function updateAllUsers() {
    for (let i = 1; i <= 10; i++) {
      updateUser(`username${i}`);
    }
  }

  // Fetch 10 different random username from API
  function updateUser(elementId) {
    fetch(url)
      .then(response => response.json())
      .then(function (data) {
        let user = data.results[0];
        // Update html for the usernames
        document.getElementById(elementId).innerText = user.login.username;
      });
  }

  // Call this function to update all users element id for updateUser function
  updateAllUsers();
});
