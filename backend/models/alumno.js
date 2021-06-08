const mongoose = require('mongoose');
const {Schema} = mongoose;
const Registro= require('./registro');
const AlumnoSchema = new Schema({

 apellido: {type: String, required: true},
 nombre: {type:String, required: true},
 nro_documento: {type:String, required:true},
 fecha_nacimiento:{type:String,required:true},
 celular:{type:Number,required:true},
 fecha_inicio:{type:String,required:true},
 domicilio:{type:String,required:true},
 email:{type:String,required:true},
 nivel:{type:String,required:true},
 registro:{type:Registro.schema},

})
module.exports = mongoose.models.Alumno || mongoose.model('Alumno', AlumnoSchema);