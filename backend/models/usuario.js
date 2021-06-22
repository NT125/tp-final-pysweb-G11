const mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
const Rol= require('./rol');
const {Schema} = mongoose;
const UsuarioSchema = new Schema({
username: {type: String, required: true},
password: {type:String, required:true},
perfil: {type:Schema.Types.ObjectId, ref: Rol},
fotoperfil: {type: String},
estado: {type: Boolean, required: true}
});
UsuarioSchema.statics.encryptPassword= async(password) =>{
   const salt= await bcrypt.genSalt(10);
   return await bcrypt.hash(password,salt);
}

UsuarioSchema.statics.comparePassword= async(password , receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}

module.exports = mongoose.model('Usuario', UsuarioSchema);