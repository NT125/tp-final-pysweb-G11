const mongoose = require("mongoose");
const {Schema} = mongoose;

const HoraSchema = new Schema({
      hora: {type:String, required:true},
      ocupado: {type:Boolean, required:true},
      cantidad:{type:Number,required:true}
})

module.exports = mongoose.models.Hora || mongoose.model("Hora", HoraSchema);