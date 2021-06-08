const Pago = require('../models/pago');

const pagoCrtl = {}

pagoCrtl.getPago = async (req, res) => {
    const pago = await Pago.findById(req.params.id);
    res.json(pago);
}

pagoCrtl.getPagos = async (req, res) => {
    var pago = await Pago.find();
    res.json(pago);
}

pagoCrtl.createPago = async (req, res) => {
 var pago = new Pago(req.body);
 try {
 await pago.save();
 res.json({
 'status': '1',
 'msg': 'Pago Guardado.'})
 } catch (error) {
 res.json({
 'status': '0',
 'msg': 'Error procesando operacion.'})
 }
}

pagoCrtl.editPago = async (req, res) => {
 const pago = new Pago(req.body);
 try {
 await Pago.updateOne({_id: req.body._id}, pago);
 res.json({
 'status': '1',
 'msg': 'Pago Modificado'
 })
 } catch (error) {
 res.json({
 'status': '0',
 'msg': 'Error procesando la operacion'
 })
 }
}

pagoCrtl.deletePago = async (req, res)=>{
 try {
 await Pago.deleteOne({_id: req.params.id});
 res.json({
 status: '1',
 msg: 'Pago removed'
 })
 } catch (error) {
 res.json({
 'status': '0',
 'msg': 'Error procesando la operacion'
 })
 }
}
module.exports = pagoCrtl;