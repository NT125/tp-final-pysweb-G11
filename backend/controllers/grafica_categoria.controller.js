const Grafica_Categoria = require("../models/grafica_categoria");
const grafica_CategoriaCtrl = {};

//Métodos GET
grafica_CategoriaCtrl.getCategoria = async(req, res) => {
      const categoria = await Grafica_Categoria.findById(req.params.id);
      res.json(categoria);
}

grafica_CategoriaCtrl.getCategorias = async(req, res) => {
      let categoria = await Grafica_Categoria.find();
      res.json(categoria);
}

grafica_CategoriaCtrl.addCategoria = async(req, res) => {
    let grafica = new Grafica_Categoria(req.body);
    try {
          await grafica.save();
          res.json({
                'status' : 1,
                'msg' : 'Categoria agregada Exitosamente'
          })
    } catch (error) {
          res.json({
                'status' : 0,
                'msg' : 'Error'
          })
    }
}

grafica_CategoriaCtrl.editCategoria = async(req, res) => {
    let grafica = new Grafica_Categoria(req.body);
    try {
          await Grafica_Categoria.updateOne({_id: req.body._id}, grafica);
          res.json({
                'status' : 1,
                'msg' : 'Grafica actualizada'
          })
    } catch (error) {
          res.json({
                'status' : 0,
                'msg' : 'Ocurrió un error al actualizar los datos.'
          })
    }
}

grafica_CategoriaCtrl.deleteCategoria = async(req, res) => {
    try {
          await Grafica_Categoria.deleteOne({_id: req.params.id});
          res.json({
                'status': 1,
                'msg' : 'La grafica ha sido eliminada'
          })
    } catch (error) {
          res.json({
                'status' : 0,
                'msg' : 'Ocurrió un error al eliminar los datos.'
          })
    }
}

module.exports = grafica_CategoriaCtrl;