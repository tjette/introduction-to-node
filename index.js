
var express = require('express');
var app = express();

app.get('/greeting', function(req,res){
  res.send("Woohoo you found the greeting endpoint!");
})

app.get('/salutations', function(req,res){
  res.send("salutations!");
})

app.listen(3000, function(){
  console.log("Listening on port 3000");
});
