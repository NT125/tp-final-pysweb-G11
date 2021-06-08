//defino controlador para el manejo de CRUD
const pagoCrtl = require('./../controllers/pago.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();
//definimos las rutas para la gestion de agente
router.get('/', pagoCrtl.getPagos);
router.post('/', pagoCrtl.createPago);
router.get('/:id', pagoCrtl.getPago);
router.put('/', pagoCrtl.editPago);
router.delete('/:id', pagoCrtl.deletePago);
//exportamos el modulo de rutas
module.exports = router;