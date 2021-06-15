const Rol = require( "../models/rol");
const rolCtrl = {}
rolCtrl.createRol = async () => {
 
 try {
const count = await Rol.estimatedDocumentCount();
if(count>0)return;
const values= await Promise.all([
    new Rol({nombre:'entrenador'}).save(),
    new Rol({nombre:'alumno'}).save(),
]) 
 console.log(values);
 } catch (error) {
    console.error(error)
}

};
module.exports = rolCtrl;