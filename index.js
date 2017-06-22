
var express = require('express');
var app = express();

app.get('/greeting', function(req,res){
  res.send("Woohoo you found the greeting endpoint!");
})
// :name --> means it is a req parameter
app.get('/greeting/:name', function(req, res){
  var yourName = req.params.name;
  var message = "Nice to meet you " + yourName;
  res.json({msg: message});
})

app.get('/color/:colorName', function(req, res){
  var favoriteColor = req.params.colorName;
  var colorMessage = "This is my favorite color: " + favoriteColor;
  res.send(colorMessage);
})

app.get('/salutations', function(req,res){
  res.send("salutations!");
})

app.listen(3000, function(){
  console.log("Listening on port 3000");
});
