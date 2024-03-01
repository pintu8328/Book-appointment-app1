const Appointment = require('../models/appointment')

exports.AddAnAppointment = async (req, res, next) => {

    try {
        const {username,email,phone } = req.body;
        const expense = await Appointment.create({
            username:username,
            email:email,
            phone:phone
        });

    
        res.status(201).send("booked")
    } catch (error) {
        console.error('Error creating expense:', error);
        res.status(500).send('Not booked');
    }

};

exports.GetAllAppointments = async (req, res, next) => {
    try {
        const appointments = await Appointment.findAll();
        res.status(200).json(appointments);
    } catch (error) {
        console.error('Error fetching appointments:', error);
        res.status(500).send('Error fetching appointments');
    }
};

exports.UpdateAnAppointment = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { username, email, phone } = req.body;
    
        const appointment = await Appointment.findByPk(id);
        if (!appointment) {
            return res.status(404).send('Appointment not found');
        }
        appointment.username = username;
        appointment.email = email;
        appointment.phone = phone;

        await appointment.save();
        res.status(200).send('Appointment updated');
    } catch (error) {
        console.error('Error updating appointment:', error);
        res.status(500).send('Error updating appointment');
    }
};

exports.DeleteAppointment = async (req, res, next) => {
    try {
        const { id } = req.params; 
        const appointment = await Appointment.findByPk(id);
        if (!appointment) {
            return res.status(404).send('Appointment not found');
        }
        await appointment.destroy();
        res.status(200).send('Appointment deleted');
    } catch (error) {
        console.error('Error deleting appointment:', error);
        res.status(500).send('Error deleting appointment');
    }
};
