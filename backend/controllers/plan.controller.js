const Plan = require('../models/plan');

const planCrtl = {}

planCrtl.getPlan = async (req, res) => {
    const plan = await Plan.findById(req.params.id);
    res.json(plan);
}

planCrtl.getPlanes = async (req, res) => {
    var plan = await Plan.find();
    res.json(plan);
}

planCrtl.createPlan = async (req, res) => {
 var plan = new Plan(req.body);
 try {
 await plan.save();
 res.json({
 'status': '1',
 'msg': 'Plan Guardado.'})
 } catch (error) {
 res.json({
 'status': '0',
 'msg': 'Error procesando operacion.'})
 }
}

planCrtl.editPlan = async (req, res) => {
 const plan = new Plan(req.body);
 try {
 await Plan.updateOne({_id: req.body._id}, plan);
 res.json({
 'status': '1',
 'msg': 'Plan Modificado'
 })
 } catch (error) {
 res.json({
 'status': '0',
 'msg': 'Error procesando la operacion'
 })
 }
}

planCrtl.deletePlan = async (req, res)=>{
 try {
 await Plan.deleteOne({_id: req.params.id});
 res.json({
 status: '1',
 msg: 'Plan removed'
 })
 } catch (error) {
 res.json({
 'status': '0',
 'msg': 'Error procesando la operacion'
 })
 }
}
module.exports = planCrtl;