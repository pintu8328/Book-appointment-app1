const express= require('express')
const app=express();

app.get('/',(req,res,next)=>{
    res.send("<h1>Home Page</h1>")
})

app.listen(4000,()=>{
    console.log("listerning on port 4000")
})