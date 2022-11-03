//import built-in `http` module with ESM
import * as http from 'node:http';
let port = 3000
// check for & validate args
// skip 1st 2
if (process.argv.length <= 2) {
  console.log("no cli args, using port 3000")
} else {
  let argv = process.argv.slice(2)
  if (isNaN(argv[0]))  {
    console.log("cli arg 1 is not numeric, using port 3000")
  } else {
    port = argv[0]
  }
}

//create a server
let server = http.createServer();
//attach event listener for request event
//req encapsulates the HTTP incoming message, res is the HTTP response
let count = 0
server.on("request", function (req, res) {
  // http header with status code and other name:value pairs
  res.writeHead(200, {"Content-Type": "text/plain"});
  // Write a response 
  res.write(`Hello World! ${count} on port ${port}`); 
  res.end(); 
  count++
});
//start listening with the server on port 3000
server.listen(port);


// requires     res.writeHead(200, {"Content-Type": "text/html"}); 
//res.write(`<body><title>Node server ${port} </title><h3>Hello World! ${count} on port ${port}</body>`); 
