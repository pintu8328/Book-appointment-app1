const Appointment = require('../models/appointment')

exports.AddAnAppointment = async (req, res, next) => {

    try {
        // Extract data from request body
        const {username,email,phone } = req.body;

        // Create expense object
        const expense = await Appointment.create({
            username:username,
            email:email,
            phone:phone
        });

        // Return success response
        res.status(201).send("booked")
    } catch (error) {
        // Handle errors
        console.error('Error creating expense:', error);
        res.status(500).send('Not booked');
    }

};