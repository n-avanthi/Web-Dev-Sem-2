const fs = require('fs');
const http = require('http');
const url = require('url');

function form(req, res){
    if(req.url == '/hotAirBalloon-home.html' || req.url == '/')
    {
        fs.readFile('./hotAirBalloon-home.html', function callBack(error, data){
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
    else if(req.url == '/hotAirBalloon-home.css')
    {
        fs.readFile('./hotAirBalloon-home.css', function callBack(error, data)
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
    else
    {
        res.writeHead(404);
        res.end("Error");
    }
}

http.createServer(form).listen(4000);
console.log('Server is running on port 4000');