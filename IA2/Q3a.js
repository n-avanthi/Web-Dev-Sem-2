const fs = require('fs');
const http = require('http');
const url = require('url');

function home(req, res){
    if(req.url=='/Q1.html' || req.url == '/')
    {
        fs.readFile('./Q1.html', function callBack(error, data){
            if(error)
            {
                res.writeHead(404);
                res.end("Error");
            }
            else
            {
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write(data);
                res.end();
            }
        });
    }
    else if (req.url == '/Q1.css') {
        // res.setHeader('Content-type', 'text/css');
        // res.write(fs.readFileSync('./Q1.css'));
        // res.end();

        fs.readFile('./Q1.css', function callBack(error, data){
            if(error)
            {
                res.writeHead(404);
                res.end("Error");
            }
            else
            {
                res.writeHead(200, {'Content-Type':'text/css'});
                res.write(data);
                res.end();
            }
        });
    }
    // else if(req.url =='/MyFormJS.js'){
    //     res.setHeader('Content-type', 'text/js');
    //     res.write(fs.readFileSync('./MyFormJS.js'));
    //     res.end();
    // }
    else
    {
        res.writeHead(404);
        res.end("Error");
    }
}

http.createServer(home).listen(8000);

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

