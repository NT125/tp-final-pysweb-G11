const Rutina = require("../models/rutina");
const rutinaCtrl = {};

//Métodos GET
rutinaCtrl.getRutina = async(req, res) => {
      const rutina = await Rutina.findById(req.params.id);
      res.json(rutina);
}

rutinaCtrl.getRutinas = async(req, res) => {
      let rutinas = await Rutina.find();
      res.json(rutinas);
}

//Método POST
rutinaCtrl.addRutina = async(req, res) => {
      let rutina = new Rutina(req.body);
      try {
            await rutina.save();
            res.json({
                  'status' : 1,
                  'msg' : 'Rutina añadida exitosamente'
            })
      } catch (error) {
            res.json({
                  'status' : 0,
                  'msg' : 'Ocurrió un error al procesar los datos. No se añadirá nada.'
            })
      }
}

//Método PUT
rutinaCtrl.editRutina = async(req, res) => {
      const rutina = new Rutina(req.body);
      try {
            await Rutina.updateOne({_id: req.body._id}, vnoticia);
            res.json({
                  'status' : 1,
                  'msg' : 'Rutina actualizada'
            })
      } catch (error) {
            res.json({
                  'status' : 0,
                  'msg' : 'Ocurrió un error al actualizar los datos.'
            })
      }
}

//Método DELETE
rutinaCtrl.deleteRutina = async(req, res) => {
      try {
            await Rutina.deleteOne({_id: req.params.id});
            res.json({
                  'status': 1,
                  'msg' : 'La rutina ha sido eliminada'
            })
      } catch (error) {
            res.json({
                  'status' : 0,
                  'msg' : 'Ocurrió un error al eliminar los datos.'
            })
      }
}

module.exports = rutinaCtrl;