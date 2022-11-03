//import built-in `http` module with ESM
import * as http from 'node:http';
//create a server
let server = http.createServer();
//attach event listener for request event
//req encapsulates the HTTP incoming message, res is the HTTP response
let count = 0
server.on("request", function (req, res) {
  // http header with status code and other name:value pairs
  res.writeHead(200, {"Content-Type": "text/plain"});
  // Write a response 
  res.write("Hello World! "+count); 
  // End the response
  res.end(); 
});
//start listening with the server on port 3000
server.listen(3000);