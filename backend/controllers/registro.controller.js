const Registro = require('../models/registro');
const registroCtrl = {}

registroCtrl.getRegistros = async (req, res) => {
    var registros = await Registro.find();
    res.json(registros);
}

registroCtrl.createRegistro = async (req, res) => {
    var registro = new Registro(req.body);
    try {
        await registro.save();
        res.json({
            'status': '1',
            'msg': 'Registro guardado.'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

registroCtrl.getRegistro = async (req, res) => {
    const registro = await Registro.findById(req.params.id);
    res.json(registro);
}

registroCtrl.editRegistro = async (req, res) => {
    const vregistro = new Registro(req.body);
    try {
        await Registro.updateOne({_id: req.body._id}, vregistro);
        res.json({
            'status': '1',
            'msg': 'Registro updated'
        })
    } catch (error) {
    res.json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
    }
}
registroCtrl.deleteRegistro = async (req, res)=>{
 try {
    await Registro.deleteOne({_id: req.params.id});
    res.json({
        status: '1',
        msg: 'Registro removed'
 })
 } catch (error) {
    res.json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
 }
}
module.exports = registroCtrl;