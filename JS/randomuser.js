let url = 'https://randomuser.me/api/';

function updateUser(){
  fetch(url)
  .then(response => response.json()) 
  .then(function(data){
    let user = data.results[0];
    document.getElementById("username1").innerText = user.login.username;
  });

  fetch(url)
  .then(response => response.json()) 
  .then(function(data){
    let user = data.results[0];
    document.getElementById("username2").innerText = user.login.username;
  });

  fetch(url)
  .then(response => response.json()) 
  .then(function(data){
    let user = data.results[0];
    document.getElementById("username3").innerText = user.login.username;
  });

  fetch(url)
  .then(response => response.json()) 
  .then(function(data){
    let user = data.results[0];
    document.getElementById("username4").innerText = user.login.username;
  });

  fetch(url)
  .then(response => response.json()) 
  .then(function(data){
    let user = data.results[0];
    document.getElementById("username5").innerText = user.login.username;
  });

  fetch(url)
  .then(response => response.json()) 
  .then(function(data){
    let user = data.results[0];
    document.getElementById("username6").innerText = user.login.username;
  });

  fetch(url)
  .then(response => response.json()) 
  .then(function(data){
    let user = data.results[0];
    document.getElementById("username7").innerText = user.login.username;
  });

  fetch(url)
  .then(response => response.json()) 
  .then(function(data){
    let user = data.results[0];
    document.getElementById("username8").innerText = user.login.username;
  });

  fetch(url)
  .then(response => response.json()) 
  .then(function(data){
    let user = data.results[0];
    document.getElementById("username9").innerText = user.login.username;
  });

  fetch(url)
  .then(response => response.json()) 
  .then(function(data){
    let user = data.results[0];
    document.getElementById("username10").innerText = user.login.username;
  });
}

