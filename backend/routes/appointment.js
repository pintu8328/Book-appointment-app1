const express = require('express')
const router = express.Router()
const appointmentController=require('../controllers/appointment')

router.post('/',appointmentController.AddAnAppointment)
router.get('/',appointmentController.GetAllAppointments)
router.put('/:id',appointmentController.UpdateAnAppointment)
router.delete('/:id',appointmentController.DeleteAppointment)

module.exports=router