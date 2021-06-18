const mongoose = require("mongoose");
const {Schema} = mongoose;

const EjercicioSchema = new Schema({
      descripcion: { type: String, required: true },
      zona: { type:String, required: true },
      intensidad: { type: String, required: true },
      repeticiones: { type:Number, required: true }
})

module.exports = mongoose.models.Ejercicio || mongoose.model("Ejercicio", EjercicioSchema);