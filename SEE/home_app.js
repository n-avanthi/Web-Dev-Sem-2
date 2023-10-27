const http = require('http')
const fs = require('fs')
const url = require('url');

const port = 4000;

function onRequest(req, res) {
    if(req.url == '/home.html' || req.url == '/'){
        fs.readFile('./home.html', function(error, data) {
            if(error) {
                res.writeHead(404);
                res.write('Error: File not Found');
            } else {
                res.writeHead(200, {'Content-type' : 'text/html'});
                res.write(data);
            }
            res.end();
        }) 
    }
    else if (req.url == '/home.css') {
        fs.readFile('./home.css', function (error, data) {
          if (error) {
            res.writeHead(404);
            res.write('Error: File not Found');
          } else {
            res.writeHead(200, {'Content-Type' : 'text/css' });
            res.write(data);
          }
          res.end();
        });
    }  
    else if (req.url == '/home.js') {
        fs.readFile('./home.js', function (error, data) {
          if (error) {
            res.writeHead(404);
            res.write('Error: File not Found');
          } else {
            res.writeHead(200, {'Content-Type' : 'text/js' });
            res.write(data);
          }
          res.end();
        });
    }  
    else {
        res.writeHead(404);
        res.write('Error: File not Found');
        res.end();
    }
}

http.createServer(onRequest).listen(port, () => {
    console.log('Server is listening on port ' + port);
});
  

