//defino controlador para el manejo de CRUD
const alumnoCtrl = require('./../controllers/alumno.controller');

//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de agente
router.get('/', alumnoCtrl.getAlumnos);
router.post('/', alumnoCtrl.createAlumno);
router.get('/:id', alumnoCtrl.getAlumno);
router.put('/', alumnoCtrl.editAlumno);
router.delete('/:id', alumnoCtrl.deleteAlumno);
router.post('/:id/registro', alumnoCtrl.addRegistro);
//router.get('/:id/:idRegistro', alumnoCtrl.deleteRegistro);
//exportamos el modulo de rutas
module.exports = router;