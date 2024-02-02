const url = 'https://randomuser.me/api/';

function updateUser(elementId) {
  fetch(url)
    .then(response => response.json())
    .then(function (data) {
      let user = data.results[0];
      document.getElementById(elementId).innerText = user.login.username;
    });
}

function updateAllUsers() {
  for (let i = 1; i <= 10; i++) {
    updateUser(`username${i}`);
  }
}

// Call this function to update all users
updateAllUsers();