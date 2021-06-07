const mongoose = require("mongoose");
const {Schema} = mongoose;

const EntrenadorSchema = new Schema({
      nombre: {type:String, required:true},
      apellido: {type:String, required:true}
})

module.exports = mongoose.models.Entrenador || mongoose.model('Entrenador', EntrenadorSchema);