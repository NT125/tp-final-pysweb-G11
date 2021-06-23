const Usuario = require('../models/usuario');
const Rol = require('../models/rol');
const Alumno = require('../models/alumno')
const jwt = require('jsonwebtoken');
const usuarioCtrl = {}

usuarioCtrl.createUsuario = async (req, res) => {
    const usuario = new Usuario(req.body);

    const log = await Usuario.find().where('username').equals(req.body.username)
    if (log[0] == null) {
        try {
            if (usuario.perfil == null) {
                const rol = await Rol.findOne({ nombre: "alumno" });
                usuario.perfil = rol;
            }
            usuario.password = await Usuario.encryptPassword(req.body.password);
            await usuario.save();
            res.json({
                'status': '1',
                'msg': 'Usuario guardado.'
            })
        } catch (error) {
            console.log(error);
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
    try {
        const user = await Usuario.findOne({ username: criteria.username }).populate("perfil");
        if (!user) {
            res.json({
                status: 0,
                msg: "not found"
            })
        } else {
            const matchPassword = await Usuario.comparePassword(criteria.password, user.password);
            if (!matchPassword) {
                res.json({
                    status: 0,
                    msg: "contraseña incorrecta"
                })
            }
            else {
                

                const unToken = jwt.sign({ id: user._id }, "secretkey");
                const idalumno = await Alumno.findOne().where('usuario').equals(user._id);
                res.json({
                    status: 1,
                    msg: "success",
                    username: user.username,
                    perfil: user.perfil,
                    token: unToken,
                    userid: user._id,
                    idalumno: idalumno,
                    fotoperfil: user.fotoperfil
                });
            }
        }
    } catch (error) {
        console.log(error)
    }
}

usuarioCtrl.getUsuarios = async (req, res) => {
    var usuario = await Usuario.find().populate("perfil");
    res.json(usuario);
}

//exportacion del modulo controlador
module.exports = usuarioCtrl;