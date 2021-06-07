const Entrenador = require("../models/entrenador");
const entrenadorCtrl = {};

//Métodos GET
entrenadorCtrl.getEntrenador = async(req, res) => {
      const entrenador = await Entrenador.findById(req.params.id);
      res.json(entrenador);
}

entrenadorCtrl.getEntrenadores = async(req, res) => {
      let entrenadores = await REntrenadorfind();
      res.json(entrenadores);
}

//Método POST
rentrenadorCtrl.addEntrenador = async(req, res) => {
      let entrenador = new Entrenador(req.body);
      try {
            await entrenador.save();
            res.json({
                  'status' : 1,
                  'msg' : 'Entrenador añadido exitosamente'
            })
      } catch (error) {
            res.json({
                  'status' : 0,
                  'msg' : 'Ocurrió un error al procesar los datos. No se añadirá nada.'
            })
      }
}

//Método PUT
entrenadorCtrl.editEntrenador = async(req, res) => {
      const entrenador = new Entrenador(req.body);
      try {
            await Entrenador.updateOne({_id: req.body._id}, entrenador);
            res.json({
                  'status' : 1,
                  'msg' : 'Entrenador actualizado'
            })
      } catch (error) {
            res.json({
                  'status' : 0,
                  'msg' : 'Ocurrió un error al actualizar los datos.'
            })
      }
}

//Método DELETE
entrenadorCtrl.deleteEntrenador = async(req, res) => {
      try {
            await Entrenador.deleteOne({_id: req.params.id});
            res.json({
                  'status': 1,
                  'msg' : 'Los datos del entrenador han sido eliminados.'
            })
      } catch (error) {
            res.json({
                  'status' : 0,
                  'msg' : 'Ocurrió un error al eliminar los datos.'
            })
      }
}

module.exports = entrenadorCtrl;