const http = require('http');
const fs = require('fs');
const url = require('url');

function onRequest(req, res) {
  if (req.url == '/Q2.html' || req.url == '/') {
    fs.readFile('./Q2.html', function callBack(error, data) {
      if (error) {
        res.writeHead(404);
        res.end();
      }
      else {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.write(data);
        res.end();
      }
    });
  }
  else if (req.url == '/Q2.css') {
    fs.readFile('./Q2.css', function callBack(error, data) {
      if (error) {
        res.writeHead(404);
        res.end();
      }
      else {
        res.writeHead(200, { 'Content-type': 'text/css' });
        res.write(data);
        res.end();
      }
    });
  }
}

http.createServer(onRequest).listen(4000);
console.log('Server is running on port 4000');