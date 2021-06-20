const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const {Schema} = mongoose;
const UsuarioSchema = new Schema({
username: {type: String, required: true},
password: {type:String, required:true},
perfil: {ref:"Rol",type:Schema.Types.ObjectId},
estado: {type:Boolean}
});
UsuarioSchema.statics.encryptPassword= async(password) =>{
   const salt= await bcrypt.genSalt(10);
   return await bcrypt.hash(password,salt);
}

UsuarioSchema.statics.comparePassword= async(password , receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}

module.exports = mongoose.model('Usuario', UsuarioSchema);