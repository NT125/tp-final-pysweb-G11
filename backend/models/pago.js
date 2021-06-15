const mongoose = require('mongoose');
const {Schema} = mongoose;
const PagoSchema = new Schema({
 monto: {type: Number, required: true},
 fechaPago: {type: String, required: true},
 metodoPago: {type: String, required: true},
 completo: {type: Boolean, required: true},
 cuota: {type: Number, required: false}
})
module.exports = mongoose.models.Pago || mongoose.model('Pago', PagoSchema);