const ejercicioCtrl = require("../controllers/ejercicio.controller");

//manejador de rutas
const express = require("express");
const router = express.Router();

router.get('/:id', ejercicioCtrl.getEjercicio);
router.get('/', ejercicioCtrl.getEjercicios);
router.post('/', ejercicioCtrl.addEjercicio);
router.put('/:id', ejercicioCtrl.editEjercicio);
router.delete('/:id', ejercicioCtrl.deleteEjercicio);

module.exports = router;