const Usuario = require('../models/usuario')
const usuarioCtrl = {}
usuarioCtrl.createUsuario = async (req, res) => {
    const usuario = new Usuario(req.body);
    var x = new Boolean(false);
    const log = await Usuario.find().where('username').equals(req.body.username)
    if (log[0] == null) {
        try {
            await usuario.save();
            res.json({
                'status': '1',
                'msg': 'Usuario guardado.'
            })
        } catch (error) {
            res.json({
                'status': '0',
                'msg': 'Error procesando operacion.'
            })
        }
    } else {
        res.json({
            'status': '2',
            'msg': 'Usuario Existente, Con el mismo Username'
        })
    }

}
usuarioCtrl.loginUsuario = async (req, res) => {
    const criteria = {
        username: req.body.username,
        password: req.body.password
    }
    //el método findOne retorna un objeto que cumpla con los criterios de busqueda
    Usuario.findOne(criteria, function (err, user) {
        //el método findOne retorna un objeto que cumpla con los criterios de busqueda
        if (err) {
            res.json({
                status: 0,
                msg: 'error'
            })
        };
        if (!user) {
            res.json({
                status: 0,
                msg: "not found"
            })
        } else {
            res.json({
                status: 1,
                msg: "success",
                username: user.username,
                perfil: user.perfil
            });
        }
    })
}
//exportacion del modulo controlador
module.exports = usuarioCtrl;