const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

var username = "idrees" 
var password = 1234

app.use(express.urlencoded({extended:true}))

app.get("/login",function(req,res)
{
    if(req.query.username === username && Number(req.query.password) ===  password)
    {
        res.send(true)
    }
    else{
        res.send(false)
    }
})

app.listen(5000,function(){
    console.log("Server Started.....")
})