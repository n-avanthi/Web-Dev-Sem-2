const fs = require('fs');
const http = require('http');
const url = require('url');

function form(req, res){
    if(req.url == '/Q2.html' || req.url == '/')
    {
        fs.readFile('./Q2.html', function callBack(error, data){
            if(error)
            {
                res.writeHead(404); 
                res.end("Error");
            }
            else
            {
                res.writeHead(200,{'Content-type':'text/html'});
                res.write(data);
                res.end();
            }
        });
    }
    else if(req.url == '/Q2.css')
    {
        fs.readFile('./Q2.css', function callBack(error, data)
        {
            if(error)
            {
                res.writeHead(404);
                res.end("Error");
            }
            else
            {
                res.writeHead(200, {'Content-type':'text/css'});
                res.write(data);
                res.end();
            }
        });
    }
    else if(req.url == '/Q2.js')
    {
        fs.readFile('./Q2.js', function callBack(error, data)
        {
            if(error)
            {
                res.writeHead(404);
                res.end("Error");
            }
            else
            {
                res.writeHead(200, {'Content-type':'text/js'});
                res.write(data);
                res.end();
            }
        });
    }
    else
    {
        res.writeHead(404);
        res.end("Error");
    }
}

http.createServer(form).listen(4000);
console.log('Server is running on port 4000');