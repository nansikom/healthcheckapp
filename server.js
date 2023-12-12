const express = require("express");
const app = express();
const request = require('request');
app.use(express.static("public"));
const cors = require("cors");
app.use(cors());
/*
searching for categoies using partners api due to use of a proxy.
*/
app.get("/api/mood/anxiety" , (req, res) =>{
   request({ url:'https://finkli.pythonanywhere.com/mood/anxiety' }, (error, response, body) =>{
      if(error || response.statusCode !== 200){
         return res.status(500).json({type : 'error', message: error.message});

      }
      res.json(JSON.parse(body));
   
  
});
});

app.get("/api/mood/stormy" , (req, res) =>{
   request({ url:'https://finkli.pythonanywhere.com/mood/stormy' }, (error, response, body) =>{
      if(error || response.statusCode !== 200){
         return res.status(500).json({type : 'error', message: error.message});

      }
      res.json(JSON.parse(body));
   
  
});
});





 




app.listen(5000,function(){
   console.log("were listening on 5000")
});
