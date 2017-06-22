## Introduction to Node

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js
uses an event driven, non-blocking I/O model that makes it lightweight and
efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source
libraries in the world.

A node module is basically a lego block of code. Everything in a node application
is modular, meaning it is made up of many different small parts that work
towards the end functionality.

npm stands for node package manager. Its just a tool that allows us to easily
access the node module ecosystem and add them to our project.

Example node_module: Moment.js

Every node app has a package.json, which is the master file that keeps track of
all node modules your project cares about.

To add a 'package.json' to your project, run the command 'npm init', and accept
all defaults.

### Node HTTP Server

We used the node module HTTP to build a simple web server, that we can then run
and connect to using the web address: 'http://localhost:3000/'
to run the server use the command 'node index.js'

'''js
var http = require("http");

http.createServer(function(request, response){
  response.writeHead(200,{'Content-Type': 'text/plain'});
  response.end("Hello World");
}).listen(3000, function(){
  console.log("app is listening on port 3000!")
});
'''
