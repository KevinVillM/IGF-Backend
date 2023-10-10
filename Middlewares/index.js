const validarJWT  = require('../middlewares/ValidarJWT');
const validarRoles = require('../middlewares/ValidarROL');
const validarCampos = require('../middlewares/ValidarCamposMiddleware');


module.exports = {
    ...validarJWT,
    ...validarRoles,
    ...validarCampos
}