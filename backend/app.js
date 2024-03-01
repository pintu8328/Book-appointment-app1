const express= require('express')
const app=express();
const sequelize=require('./utils/database')
const appointmentRoute= require('./routes/appointment')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
  app.use('/',appointmentRoute)
  
sequelize.sync()
.then(()=>{
    app.listen(4000,()=>{
        console.log("listerning on port 4000")
    })
}).catch(err=>{
    console.log(err)
})

