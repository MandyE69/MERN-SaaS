  const express = require("express");
  const app = express();
  const bookRoute = require("./routes/bookRoutes")
  const cors = require("cors")
  require("./database/connection")
  app.use(express.json())

  // let app = require("express")()

  // localhost:4000/api+ /hello = localhost:4000/api/hello
  // localhost:4000/api + /books/:id = localhost:4000/api/books/:id
  // localhost:4000/api/haha/ + /books = localhost:4000/api/haha//books
  
  app.use(cors({
    origin :"http://localhost:5173"
  }))

  app.use("/api", bookRoute)  

  app.listen(3000, function () {
    console.log("server/backend/node project has started at port 3000");
  });