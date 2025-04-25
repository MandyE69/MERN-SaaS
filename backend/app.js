const express = require("express");
const app = express();

// let app = require("express")();

// app.get("/",(req,res)=>{ //(request,response) /// yo chai api bhayoo jun ma json send gareko chau
//     res.json({
//       name : "madhav",
//       address : "Chitwan"
//     })
// })


// app.get("/about",(req,res)=>{ // yo chai api hoina route bhanna milyo or route nai bhanyoo
//     res.send("This is about page")
// })

// app.post("/register", (req,res)=>{
//   res.json({
//     name :"Registeration confirmed"
//   })
// })

app.get("/books", (req,res)=>{
  // logic to fetch data from database
  res.json({
    message: "read books successfully"
  })
})

app.post("/books", (req,res)=>{
// logic to create data 
  res.json({
    message: "create books successfully"
  })
})

app.delete("/books/:id", (req,res)=>{
// logic to delete data
  res.json({
    message: "deleted books successfully"
  })
})

app.patch("/books/:id", (req,res)=>{
  // logic to update data
  res.json({
    message: "update books successfully"
  })
})













app.listen(3000,function(){
  console.log("server/backend/node project has started at port 3000")
})