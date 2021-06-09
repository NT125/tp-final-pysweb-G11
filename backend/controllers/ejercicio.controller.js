const Ejercicio = require("../models/ejercicio");
const entrenador = require("../models/entrenador");
const ejercicioCtrl = {};

//Métodos GET
ejercicioCtrl.getEjercicio = async(req, res) => {
      const ejercicio = await Ejercicio.findById(req.params.id);
      res.json(ejercicio);
}

ejercicioCtrl.getEjercicios = async(req, res) => {
      let ejercicios = await Ejercicio.find();
      res.json(ejercicios);
}

//Método POST
ejercicioCtrl.addEjercicio = async (req, res) => {
      let ejercicio = new Ejercicio(req.body);
      try {
            await ejercicio.save();
            res.json({
                  'status' : 1,
                  'msg' : 'Ejercicio añadido exitosamente.'
            })
      } catch (error) {
            res.json({
                  'status' : 0,
                  'msg' : 'Ocurrió un error al procesar los datos. No se añadirá nada.'
            })
      }
}

//Método PUT
ejercicioCtrl.editEjercicio = async (req, res) => {
      const ejercicio = new Ejercicio(req.body);
      try {
            await Ejercicio.updateOne({_id: req.body._id}, ejercicio);
            res.json({
                  'status' : 1,
                  'msg' : 'El ejercicio ha sido actualizado.'
            })
      } catch (error) {
            res.json({
                  'status' : 0,
                  'msg' : 'Ocurrió un error al actualizar los datos.'
            })
      }
}

//Método DELETE
ejercicioCtrl.deleteEjercicio = async(req, res) => {
      try {
            await entrenador.deleteOne({_id: req.params.id});
            res.json({
                  'status': 1,
                  'msg' : 'El ejercicio ha sido eliminado.'
            })
      } catch (error) {
            res.json({
                  'status' : 0,
                  'msg' : 'Ocurrió un error al eliminar los datos.'
            })
      }
}

module.exports = ejercicioCtrl;