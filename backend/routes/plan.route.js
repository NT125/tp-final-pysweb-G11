//defino controlador para el manejo de CRUD
const planCrtl = require('./../controllers/plan.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/', planCrtl.getPlanes);
router.post('/', planCrtl.createPlan);
router.get('/:id', planCrtl.getPlan);
router.put('/', planCrtl.editPlan);
router.delete('/:id', planCrtl.deletePlan);
//exportamos el modulo de rutas
module.exports = router;