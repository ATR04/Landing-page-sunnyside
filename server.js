const express = require('express');
const app=express();

app.get("/",function(req,res){
  res.sendfile(__dirname + "/index.html");
})

app.use(express.static("public"));

app.listen(3000, function(){
  console.log("working");
});
