// we want to handle http requests
 const http = require('http');
 //  handle file systems
 const fs = require('fs');
 // set a path
 const path = require('path');
 // were creating a server that sends requests and brings back responses
 const server = http.createServer((req, res)=>{
    //we would like it to follow a url from recommendations
    const filePath = path.join(__dirname, req.url === '/' ? 'recommendations.html' :req.url);
    // trying to read the file specified by the file path. 
    const fileStream = fs.createReadStream(filePath);
    // checks if file was found 
    fileStream.on('error', () =>{ 
        res.writeHead(404,{ 'Content-Type': 'text/html' });
        res.end('404 Not Found');
    });
    //brings back the response  to the client.
    fileStream.pipe(res);
 });
 // trying to check if our sever is listening on our desired port.
 const port =8000;
 server.listen(port, () =>{
    console.log(`Server is running at http://localhost:${port}`);

 });
