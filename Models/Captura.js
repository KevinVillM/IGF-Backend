const mongoose = require('mongoose');

const CapturaSchema = new mongoose.Schema({
    url_captura: {
        type: String,
    },
    nom_captura: {
        type: String,
        required: true
    },
    fecha_captura: {
        type: String,
        default: Date.now
    },
    sesion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sesion'
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
});

const Captura = mongoose.model('Captura', CapturaSchema);
module.exports = Captura;