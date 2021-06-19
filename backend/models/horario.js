const mongoose = require("mongoose");
const {Schema} = mongoose;
const Hora= require("./hora");

const HorarioSchema = new Schema({
      dia: { type: String, required: true },
      hora: [{type:Hora.schema, required:true}]
})

module.exports = mongoose.models.Horario || mongoose.model("Horario", HorarioSchema);