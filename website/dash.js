const config = require("../config.json")
const express = require('express')

function load_website(port,client) {
  const app = express()
  
  app.get('/', function (req, res) {
    let bot_name = client.user.username;
    let bot_id = client.user.id;
    let bot_iconurl = config.icon;
    let servers = client.guilds.cache.size;
    let users= client.users.cache.size;
    let bot_prefix = client.prefix;
    let bot_description = config.bot_description;
    let invite = `https://discord.com/api/oauth2/authorize?client_id=${bot_id}&permissions=8&scope=bot%20applications.commands`;

    /*
    All variables required for the dashboard ^^
    */
    let a=`<!DOCTYPE html>
<html lang="en">
<head>
  <title>${bot_name} Website</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body style="background-image: url('https://image.freepik.com/free-vector/background-design-with-blue-black-theme_1308-4821.jpg');">

<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#"><strong>${bot_name}</strong></a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="${invite}"><span class="glyphicon glyphicon-user"></span> Invite Me!</a></li>
  </div>
</nav>
  
<div class="container" align=center>
  <img src="${bot_iconurl}" class="img-responsive img-circle" alt="${bot_name}">
  <b><p style="color:white;text-align: center;font-size:5vw">${bot_name}</p></b>
</div>
<p style="color:white;text-align: center;font-size:2vw">In <strong>${servers}</strong> Servers!<br>Serving <strong>${users}</strong> Members!</p>
<br>
<br>
<br>
<div class="container" align=center>
  <p style="color:white;text-align: center;font-size:3vw">${bot_description}</p>
</div>


</body>
</html>`; // website's HTML code.

    res.send(a);//Sending the HTML to the main page.
    
  })
  app.listen(port);//listening to the port.
  console.log("════════ ≪ WEBSITE READY ON PORT "+port+" ≫ ════════")

}

module.exports={
  load_website
}
