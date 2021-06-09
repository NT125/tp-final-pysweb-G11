const mongoose = require("mongoose");
const {Schema} = mongoose;
const Ejercicio = require("./rutina");

const RutinaSchema = new Schema({
      ejercicios: {type: Array, required:true},
      nivel: {type: Number, required:true}
})

module.exports = mongoose.models.Rutina || mongoose.model("Rutina", RutinaSchema);
