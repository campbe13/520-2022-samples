import * as http from 'node:http';
let server = http.createServer();
server.on("request", function (req, res) {
  let url = req.url;
  if(url === "/text") {
    res.writeHead(200, {"Content-Type": "text/plain"}); 
    res.write("Text page"); 
    res.end(); 
  } else if(url === "/html") {
    res.writeHead(200, {"Content-Type": "text/html"}); 
    res.write("<h1>Welcome!</h1>"); 
    res.end(); 
  } else if (url === "/json") {
    res.writeHead(200, {"Content-Type": "application/json"}); 
    res.write(JSON.stringify({name: "jaya", class:520})); 
    res.end(); 
  } else {
    res.writeHead(404);
    res.end();
  }
});
server.listen(3003, function() {
  console.log("server start at port 3003"); 
});