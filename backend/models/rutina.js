const mongoose = require("mongoose");
const {Schema} = mongoose;

const RutinaSchema = new Schema({
      ejercicios: {type:String, required:true}, //CAMBIAR POR tipo Ejercicio
      nivel: {type: Number, required:true}
})

module.exports = mongoose.models.Rutina || mongoose.model("Rutina", RutinaSchema);
