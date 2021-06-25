const Rol = require("../models/rol");
const Plan = require("../models/plan");
const iniciadorCtrl = {}
iniciadorCtrl.createRol = async () => {
  try {
    const count = await Rol.estimatedDocumentCount();
    if (count > 0) return;
    const values = await Promise.all([
      new Rol({ nombre: 'entrenador' }).save(),
      new Rol({ nombre: 'alumno' }).save(),
    ])
    console.log(values);
  } catch (error) {
    console.error(error)
  }

};
iniciadorCtrl.createPlan = async()=>{
  try {
    const count = await Plan.estimatedDocumentCount();
    if (count > 0) return;
    const values = await Promise.all([
      new Plan({ cantidadDias: 3, precio: 300, tipo: "Basico"}).save(),
      new Plan({ cantidadDias: 5, precio: 500, tipo: "Full"}).save(),
      new Plan({ cantidadDias: 6, precio: 700, tipo: "Libre"}).save(),
    ])
    console.log(values);
  } catch (error) {
    console.error(error)
  }
}

module.exports = iniciadorCtrl;