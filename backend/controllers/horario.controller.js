const Horario = require("../models/horario");
const horarioCtrl = {};

//Métodos GET
horarioCtrl.getHorariosActivos = async(req, res) => {
    let horarios = await Horario.find();
    res.json(horarios);
}
horarioCtrl.getHorasActivas= async(req,res)=>{
    let horario = await Horario.findById(req.params.id);
    let activas=horario.hora.filter(element => element.ocupado ==false);
    res.json(activas);
}
horarioCtrl.getHora= async(req,res)=>{
    let horario = await Horario.findById(req.params.id);
    let activas= await horario.hora.filter(element => element.ocupado ==false  && element._id==req.params.hora);
    var index=await horario.hora.findIndex(element => element.ocupado ==false  && element._id==req.params.hora);
    //activas[0].cantidad--;
    horario.hora[index]=activas[0];
    console.log(horario.hora);
    res.json(horario.hora);
}
module.exports = horarioCtrl;