const fs = require('fs');
const http = require('http');
const url = require('url');

function home(req, res){
    if(req.url == '/homePage.html' || req.url == '/')
    {
        fs.readFile('./homePage.html', function callBack(error, data){
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
    else if(req.url == '/homePage.css')
    {
        fs.readFile('./homePage.css', function callBack(error, data)
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
    else if(req.url == '/homePage.js')
    {
        fs.readFile('./homePage.js', function callBack(error, data)
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

http.createServer(home).listen(8000);
console.log('Server is running on port 8000');

function form(req, res){
    if(req.url == '/formPage.html' || req.url == '/')
    {
        fs.readFile('./formPage.html', function callBack(error, data){
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
    else if(req.url == '/formPage.css')
    {
        fs.readFile('./formPage.css', function callBack(error, data)
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
    else if(req.url == '/formPage.js')
    {
        fs.readFile('./formPage.js', function callBack(error, data)
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