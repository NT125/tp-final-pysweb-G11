const mongoose = require('mongoose');
const {Schema} = mongoose;
const RegistroSchema = new Schema({
 peso: {type: Number, required: true},
 dieta:{type:String, required:true},
 imagen:{type:String},
 fecha_registro:{type:String,required:true}
})
module.exports = mongoose.models.Registro || mongoose.model('Registro', RegistroSchema);