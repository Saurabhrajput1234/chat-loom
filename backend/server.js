const express = require("express");

const dotenv = require("dotenv")
const users = require("./data/chat")



const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;


app.get("/" , (req,res)=>{
 res.send ( `Api is run on the port no ${PORT}` )
} )

app.get("/users" , (req,res)=>{
  res.json(users);
})

app.get("/users/:id" , (req,res)=>{
  const userId = parseInt(req.params.id,10);
  console.log(req);
  const user = users.find((u) => u.id === userId);
  res.json(user);
})

app.listen(PORT, console.log(`Server Started on PORT ${PORT}`));