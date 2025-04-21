const express = require("express");
const app = express();

// let app = require("express")();

app.get("/",(req,res)=>{ //(request,response)
    res.send("Hello World")
})

app.get("/about",(req,res)=>{
    res.send("<a href='https://www.google.com/'>Goggle</a>")
})















app.listen(3000,function(){
  console.log("server/backend/node project has started at port 3000")
})