var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/instagrams', function(req,res){
  res.send("Hi");
});

app.post('/instagrams', function(req,res){
  res.send("Hello from post!");
});




var server = app.listen(3000, function(){
  console.log("Listening on port 3000");
});
