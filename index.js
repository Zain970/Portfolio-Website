const express = require("express")

const App = express()

const PORT = 3000;


App.get("/",(req,res)=>{
    res.send("Hello world");
})

App.get("/users",(req,res)=>{
    res.status(200).json({
        status:'success',
        message:"Get all users"
    })
})
App.listen(PORT,()=>{
    console.log(`Server listening on port : ${PORT} `)
})