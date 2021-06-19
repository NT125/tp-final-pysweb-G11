const horarioCtrl = require("../controllers/horario.controller");

//manejador de rutas
const express = require("express");
const router = express.Router();
router.get('/', horarioCtrl.getHorariosActivos);
router.get('/:id', horarioCtrl.getHorasActivas);
module.exports = router;