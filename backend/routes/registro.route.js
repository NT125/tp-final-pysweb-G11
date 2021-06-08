//defino controlador para el manejo de CRUD
const registroCtrl = require('./../controllers/registro.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de agente
router.get('/', registroCtrl.getRegistros);
router.post('/', registroCtrl.createRegistro);
router.get('/:id', registroCtrl.getRegistro);
router.put('/', registroCtrl.editRegistro);
router.delete('/:id', registroCtrl.deleteRegistro);

//exportamos el modulo de rutas
module.exports = router;