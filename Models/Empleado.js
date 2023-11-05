const mongoose = require('mongoose'); 

const empleadoSchema = new mongoose.Schema({
    cod_empleado: {
        type: String,
        required: true
    },
    nom_empleado: {
        type: String,
        required: true
    },
    dui: {
        type: String,
        required: true
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
});


const Empleado = mongoose.model('Empleado', empleadoSchema);
module.exports = Empleado;
