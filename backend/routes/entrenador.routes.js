const entrenadorCtrl = require("../controllers/entrenador.controller");

// manejador de rutas
const express = require("express");
const router = express.Router();

router.get('/:id', entrenadorCtrl.getEntrenador);
router.get('/', entrenadorCtrl.getEntrenadores);
router.post('/', entrenadorCtrl.addEntrenador);
router.put('/:id', entrenadorCtrl.editEntrenador);
router.delete('/:id', entrenadorCtrl.deleteEntrenador);

module.exports = router;