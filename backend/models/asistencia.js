const mongoose = require("mongoose");
const {Schema} = mongoose;

const AsistenciaSchema = new Schema({
      fechaasistencia: { type: String, required: true },
      horaAsistencia:{type:String, required:true},
      asistio:{type:Boolean, required:true}
})

module.exports = mongoose.models.Asistencia || mongoose.model("Asistencia", AsistenciaSchema);