
var express = require('express');

var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



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

app.post('/products', function(req, res){
  var name = req.body.name;
  var color = req.body.color ;
  var price = req.body.price;
  var product = {name: name, color: color, price: price};
  res.json(product);
})

app.post('/basketball', function(req,res){
  var name = req.body.name;
  var position = req.body.position;
  var team = req.body.team;

  var player = {name: name, position: position, team:team};
  res.json(player);
})

app.listen(3000, function(){
  console.log("Listening on port 3000");
});
