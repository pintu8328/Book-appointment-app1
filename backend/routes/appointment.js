const express = require('express')
const router = express.Router()
const appointmentController=require('../controllers/appointment')

router.post('/add',appointmentController.AddAnAppointment)

module.exports=router