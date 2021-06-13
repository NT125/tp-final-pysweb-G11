const mongoose = require("mongoose");
const {Schema} = mongoose;
const Ejercicio = require("./ejercicio");

const RutinaSchema = new Schema({
      ejercicios:[{type:Ejercicio.schema}],
      nivel: {type: Number, required:true}
})

module.exports = mongoose.models.Rutina || mongoose.model("Rutina", RutinaSchema);
