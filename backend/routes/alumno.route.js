//defino controlador para el manejo de CRUD
const alumnoCtrl = require('./../controllers/alumno.controller');
const autCtrl = require('./../controllers/auth.controller');
//creamos el manejador de rutas
const express = require('express');
const router = express.Router();

//definimos las rutas para la gestion de agente
router.get('/',autCtrl.verifyToken, alumnoCtrl.getAlumnos);
router.post('/',autCtrl.verifyToken, alumnoCtrl.createAlumno);
router.get('/:id',autCtrl.verifyToken, alumnoCtrl.getAlumno);
router.put('/',autCtrl.verifyToken, alumnoCtrl.editAlumno);
router.delete('/:id',autCtrl.verifyToken, alumnoCtrl.deleteAlumno);

//ABM De Registro
router.post('/:id/registro', autCtrl.verifyToken,alumnoCtrl.addRegistro);
router.get('/:id/registros', autCtrl.verifyToken, alumnoCtrl.getRegistros);
router.get('/:id/registro/:idregistro',autCtrl.verifyToken ,alumnoCtrl.getRegistro);
router.put('/:id/registro', autCtrl.verifyToken, alumnoCtrl.editRegistro);

//ABM de Pago
router.post('/:id/pago',autCtrl.verifyToken, alumnoCtrl.addPago);   
router.put('/:id/pago',autCtrl.verifyToken, alumnoCtrl.editPago);
router.get('/:id/pagos',autCtrl.verifyToken, alumnoCtrl.getPagos);
router.get('/:id/pago/:idpago',autCtrl.verifyToken, alumnoCtrl.getPago);

//ABM de Plan
router.post('/:id/plan',autCtrl.verifyToken, alumnoCtrl.addPlan);

//ABM de Rutina
router.post('/:id/rutina',autCtrl.verifyToken, alumnoCtrl.addRutina);

//ABM de Asistencia
router.post('/:id/asistencia', autCtrl.verifyToken, alumnoCtrl.addAsistencia);
router.put('/:id/asistencia',autCtrl.verifyToken, alumnoCtrl.editAsistencia);

//ABM de Usuario
router.post('/:id/usuario',autCtrl.verifyToken, alumnoCtrl.addUsuario);
router.put('/:id/usuario',autCtrl.verifyToken, alumnoCtrl.editUsuario);

//Buscar Alumno por Categoria
router.get('/:nivel/nivel',autCtrl.verifyToken, alumnoCtrl.getAlumnoPorCategoria);
//Busqueda por DNI
router.get('/:nro_documento/dni',autCtrl.verifyToken, alumnoCtrl.getAlumnoPorDNI);
//Busqueda por Fecha Inicio
router.get('/:fecha_inicio/fechainicio',autCtrl.verifyToken,alumnoCtrl.getAlumnoPorFechaInicio);

//exportamos el modulo de rutas
module.exports = router;