const mongoose = require('mongoose');
const {Schema} = mongoose;
const PlanSchema = new Schema({
 cantidadDias: {type: Number, required: true},
 precio: {type: Number, required: true},
 tipo: {type:String, required: true}
})
module.exports = mongoose.models.Plan || mongoose.model('Plan', PlanSchema);