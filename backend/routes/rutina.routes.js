const rutinaCtrl = require("../controllers/rutina.controller");

// manejador de rutas
const express = require(express);
const router = express.Router();

router.get('/:id', rutinaCtrl.getRutina);
router.get('/', rutinaCtrl.getRutinas);
router.post('/', rutinaCtrl.addRutina);
router.put('/:id', rutinaCtrl.editRutina);
router.delete('/:id', rutinaCtrl.deleteRutina);

module.exports = router;