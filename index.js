const express = require("express")

const App = express()

const PORT = 3000;


// GET : Get all users
App.get("/users",(req,res)=>{
    res.status(200).json({
        status:'success',
        message:"Get all users"
    })
})

// POST : Create new user
App.post("/user",(req,res)=>{
    res.status(200).json({
        status:"success",
        message:"User has been created"
    })
})

App.get("/",(req,res)=>{
    res.status(200).json({
        status:"success",
        message:"Just test"
    })
})
App.listen(PORT,()=>{
    console.log(`Server listening on port : ${PORT} `)
})