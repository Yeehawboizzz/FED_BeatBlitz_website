let url = 'https://randomuser.me/api/';

function updateUser(){
fetch(url)
  .then(response => response.json()) 
  .then(function(data){
    let user = data.results[0];
    document.getElementById("avatar").src = user.picture.large;
    document.getElementById("fullname").innerText = user.login.username;
  });
}
