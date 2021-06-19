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
module.exports = horarioCtrl;