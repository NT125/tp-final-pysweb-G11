const Rol = require("../models/rol");
const Hora = require("../models/hora");
const Horario = require("../models/horario");
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
iniciadorCtrl.createHorarios = async () => {

  try {
    const count = await Horario.estimatedDocumentCount();
    if (count > 0) return;
    const values = await Promise.all([
      new Horario({ dia:"Lunes",hora:[
        new Hora({ hora:"8:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"9:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"10:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"11:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"12:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"17:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"18:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"19:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"20:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"21:00",ocupado:false,cantidad:3}), 
      ]}).save(), 
      new Horario({ dia:"Martes",hora:[
        new Hora({ hora:"8:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"9:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"10:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"11:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"12:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"17:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"18:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"19:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"20:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"21:00",ocupado:false,cantidad:3}), 
      ]}).save(), 
      new Horario({ dia:"Miercoles",hora:[
        new Hora({ hora:"8:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"9:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"10:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"11:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"12:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"17:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"18:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"19:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"20:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"21:00",ocupado:false,cantidad:3}), 
      ]}).save(), 
      new Horario({ dia:"Jueves",hora:[
        new Hora({ hora:"8:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"9:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"10:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"11:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"12:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"17:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"18:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"19:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"20:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"21:00",ocupado:false,cantidad:3}), 
      ]}).save(), 
      new Horario({ dia:"Viernes",hora:[
        new Hora({ hora:"8:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"9:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"10:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"11:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"12:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"17:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"18:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"19:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"20:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"21:00",ocupado:false,cantidad:3}), 
      ]}).save(), 
      new Horario({ dia:"Sabado",hora:[
        new Hora({ hora:"8:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"9:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"10:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"11:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"12:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"17:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"18:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"19:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"20:00",ocupado:false,cantidad:3}), 
        new Hora({ hora:"21:00",ocupado:false,cantidad:3}), 
      ]}).save(), 
  
    ])
    console.log(values);
  } catch (error) {
    console.error(error)
  }

};
module.exports = iniciadorCtrl;