const mongoose = require('mongoose');
const {Schema} = mongoose;
const RegistroSchema = new Schema({

 peso: {type: String, required: true},
 peso: {type: Number, required: true},
 imagenes:[String],
 fecha_registro:{type:String,required:true}

})
module.exports = mongoose.models.Registro || mongoose.model('Registro', RegistroSchema);