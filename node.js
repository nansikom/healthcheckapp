const http = require('http');
const fs = require('fs');
const server = http.createserver((req,res) => {
    if(req.method === 'GET' && req.url === '/getMoodFile'){
        const mood = 'anxious';

    
    if (mood==="anxious") {
        const file = anxious.txt;
        fs.readFile(file, (err,data) => {
            if (err){
                res.statusCode= 500;
                res.end('Internal server error');

            }
            else{
                res.setHeader('Content-Type','text/plain');
                res.end(data);
            }
          });
    }else{
        res.statusCode=404;
        res.end('Mood not found');
    }
}else{
    res.statusCode=404;
    res.end('not found');
}
});
const port = 3000;
server.listen(port, ()=>{
console.log(`Server is listening on port ${port}`);
});

