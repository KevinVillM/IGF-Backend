const mongoose = require('mongoose');

const SesionSchema = new mongoose.Schema({
    hora_inicio_sesion: {
        type: String,
        required: true
    },
    hora_fin_sesion: {
        type: String,
    },
    fecha_sesion: {
        type: String,
        required: true
    },
    empleado: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Empleado',
    },
    sala: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sala',
        required: true,
    },
});

const Sesion = mongoose.model('Sesion', SesionSchema);
module.exports = Sesion;