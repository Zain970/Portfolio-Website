const express = require("express")

const App = express()

const PORT = 3000;

App.listen(PORT,()=>{
    console.log(`Server listening on port : ${PORT} `)
})