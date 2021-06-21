const mongoose = require('mongoose');
const {Schema} = mongoose;
const Registro= require('./registro');
const Pago= require('./pago');
const Rutina= require('./rutina');
const Asistencia= require('./asistencia');
const Plan= require('./plan');
const Usuario= require('./usuario');
const AlumnoSchema = new Schema({
 usuario:{type: Schema.Types.ObjectId, ref: Usuario},
 apellido: {type: String, required: true},
 nombre: {type:String, required: true},
 nro_documento: {type:String, required:true},
 fecha_nacimiento:{type:String,required:true},
 celular:{type:Number,required:true},
 fecha_inicio:{type:String,required:true},
 domicilio:{type:String,required:true},
 email:{type:String,required:true},
 nivel:{type:String},
 asistencia:[{type:Asistencia.schema}],
 registro:[{type:Registro.schema}],
 pago:[{type:Pago.schema}],
 plan:{type: Schema.Types.ObjectId, ref: Plan},
 rutina:[{type:Rutina.schema}]
})
module.exports = mongoose.models.Alumno || mongoose.model('Alumno', AlumnoSchema);