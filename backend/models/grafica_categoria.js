const mongoose = require("mongoose");
const {Schema} = mongoose;

const Grafica_CategoriaSchema = new Schema({
      nombrecate: { type: String },
      colorcate: { type: String },
      datoscate: { type: String }
})

module.exports = mongoose.models.Grafica_Categoria || mongoose.model("Grafica_Categoria", Grafica_CategoriaSchema);