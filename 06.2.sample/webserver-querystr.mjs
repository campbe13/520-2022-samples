import * as http from 'node:http';
let server = http.createServer();
server.on("request", function (req, res) {
  console.log(`${req.headers.host}`);
  console.log(`${req.headers}`);
  const url = new URL(req.url, `http://${req.headers.host}`);
  res.writeHead(200, {"Content-Type": "text/plain"});
  console.log(url);
  res.write(url.toString()); 
  res.write("\n");
  res.write(url.searchParams.toString()); 
  res.end(); 
});

server.listen(3005, function() {
  console.log("server start at port 3005")  ; 
});