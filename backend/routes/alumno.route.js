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

//ABM De Registro
router.post('/:id/registro', alumnoCtrl.addRegistro);
router.get('/:id/registros', alumnoCtrl.getRegistros);
router.get('/:id/registro/:idregistro', alumnoCtrl.getRegistro);
router.put('/:id/registro', alumnoCtrl.editRegistro);

//ABM de Pago
router.post('/:id/pago', alumnoCtrl.addPago);
router.put('/:id/pago', alumnoCtrl.editPago);
router.get('/:id/pagos', alumnoCtrl.getPagos);
router.get('/:id/pago/:idpago', alumnoCtrl.getPago);

//ABM de Plan
router.post('/:id/plan', alumnoCtrl.addPlan);

//ABM de Rutina
router.post('/:id/rutina', alumnoCtrl.addRutina);

//ABM de Asistencia
router.post('/:id/asistencia', alumnoCtrl.addAsistencia);
router.put('/:id/asistencia', alumnoCtrl.editAsistencia);

//ABM de Usuario
router.post('/:id/usuario', alumnoCtrl.addUsuario);
router.put('/:id/usuario', alumnoCtrl.editUsuario);

//Buscar Alumno por Categoria
router.get('/:nivel/nivel', alumnoCtrl.getAlumnoPorCategoria);
//Busqueda por DNI
router.get('/:nro_documento/dni', alumnoCtrl.getAlumnoPorDNI);
//Busqueda por Fecha Inicio
router.get('/:fecha_inicio/fechainicio', alumnoCtrl.getAlumnoPorFechaInicio);

//exportamos el modulo de rutas
module.exports = router;