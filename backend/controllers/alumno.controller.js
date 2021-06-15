const Alumno = require('../models/alumno');
const Registro=require('../models/registro')
const Pago=require('../models/pago')
const Rutina=require('../models/rutina')
const Asistencia=require('../models/asistencia')
const Usuario=require('../models/usuario')
const Plan=require('../models/plan')
const Rol=require('../models/rol')
const alumnoCtrl = {}

alumnoCtrl.getAlumnos = async (req, res) => {
    var alumnos = await Alumno.find().populate("registro").populate("rutina").populate("usuario").populate("plan");
    res.json(alumnos);
}

alumnoCtrl.createAlumno = async (req, res) => {
    var alumno = new Alumno(req.body);
    try {
        await alumno.save();
        res.json({
            'status': '1',
            'msg': 'Alumno guardado.'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

alumnoCtrl.getAlumno = async (req, res) => {
    const alumno = await Alumno.findById(req.params.id);
    res.json(alumno);
}

alumnoCtrl.editAlumno = async (req, res) => {
    const valumno = new Alumno(req.body);
    try {
        await Alumno.updateOne({_id: req.body._id}, valumno);
        res.json({
            'status': '1',
            'msg': 'Alumno updated'
        })
    } catch (error) {
    res.json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
    }
}

alumnoCtrl.deleteAlumno = async (req, res)=>{
 try {
    await Alumno.deleteOne({_id: req.params.id});
    res.json({
        status: '1',
        msg: 'Alumno removed'
 })
 } catch (error) {
    res.json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
 }
}

alumnoCtrl.addRegistro = async (req, res) => {
    const vregistro = new Registro(req.body);
    const valumno = await Alumno.findById(req.params.id);
    valumno.registro.push(vregistro);
    try {
        await Alumno.updateOne({_id: req.params.id}, valumno);
        res.json({
            'status': '1',
            'msg': 'Registro guardado'
        })
    } catch (error) {
    res.json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
    }
}

alumnoCtrl.addPago = async (req, res) => {
    const vpago = new Pago(req.body);
    const valumno = await Alumno.findById(req.params.id);
    valumno.pago.push(vpago);
    try {
        await Alumno.updateOne({_id: req.params.id}, valumno);
        res.json({
            'status': '1',
            'msg': 'Pago guardado'
        })
    } catch (error) {
    res.json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
    }
}

alumnoCtrl.editPago = async (req, res) => {
    var alumno = await Alumno.findById(req.params.id);
    let pago = await alumno.pago.find(r => r._id == req.body._id);
    pago.set(req.body);
    const index = alumno.pago.findIndex(element => element._id == req.body._id);
    alumno.pago.set(index, pago);

    try {
        await Alumno.updateOne({ _id: req.params.id }, alumno);
        res.json({
            'status': '1',
            'msg': 'Pago updated'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }

}

alumnoCtrl.getPagos = async (req, res) => {
    var alumno = await Alumno.findById(req.params.id);
    let pagos = await alumno.pago;
    res.json(pagos);
}

alumnoCtrl.getPago = async (req, res) => {
    var alumno = await Alumno.findById(req.params.id);
    let pago = await alumno.pago.find(r => r._id == req.params.idpago);
    res.json(pago);
}


alumnoCtrl.addPlan = async (req, res) => {
    const vplan = new Plan(req.body);
    const valumno = await Alumno.findById(req.params.id);
    valumno.plan=vplan;
    try {
        await Alumno.updateOne({_id: req.params.id}, valumno);
        res.json({
            'status': '1',
            'msg': 'Plan guardada'
        })
    } catch (error) {
    res.json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
    }
}

alumnoCtrl.addRutina = async (req, res) => {
    const vrutina = await Rutina.findById(req.body._id);
    const valumno = await Alumno.findById(req.params.id);
    valumno.rutina.push(vrutina);
    try {
        await Alumno.updateOne({_id: req.params.id}, valumno);
        res.json({
            'status': '1',
            'msg': 'Rutina guardada'
        })
    } catch (error) {
    res.json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
    }
}

alumnoCtrl.getRegistros = async (req, res) => {
    var alumno = await Alumno.findById(req.params.id);
    let registros = await alumno.registro;
    res.json(registros);
}

alumnoCtrl.getRegistro = async (req, res) => {
    var alumno = await Alumno.findById(req.params.id);
    let registro = await alumno.registro.find(r => r._id == req.params.idregistro);
    res.json(registro);
}

alumnoCtrl.editRegistro = async (req, res) => {
    var alumno = await Alumno.findById(req.params.id);
    let registro = await alumno.registro.find(r => r._id == req.body._id);
    registro.set(req.body);
    const index = alumno.registro.findIndex(element => element._id == req.body._id);
    alumno.registro.set(index, registro);

    try {
        await Alumno.updateOne({ _id: req.params.id }, alumno);
        res.json({
            'status': '1',
            'msg': 'Registro updated'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }

}

alumnoCtrl.getAlumnoPorCategoria = async (req, res) => {
    var alumno = await Alumno.find().where('nivel').equals(req.params.nivel);
    res.json(alumno);
}

alumnoCtrl.getAlumnoPorDNI = async (req, res) => {
    var alumno = await Alumno.find().where('nro_documento').equals(req.params.nro_documento);
    res.json(alumno);
}

alumnoCtrl.getAlumnoPorFechaInicio = async (req, res) => {
    var alumno = await Alumno.find().where('fecha_inicio').equals(req.params.fecha_inicio);
    res.json(alumno);
}

alumnoCtrl.addAsistencia = async (req, res) => {
    const vasistencia = new Asistencia(req.body);
    const valumno = await Alumno.findById(req.params.id);
    valumno.asistencia.push(vasistencia);
    try {
        await Alumno.updateOne({_id: req.params.id}, valumno);
        res.json({
            'status': '1',
            'msg': 'Asistencia guardada'
        })
    } catch (error) {
    res.json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
    }
}

alumnoCtrl.editAsistencia = async (req, res)=>{
    var alumno = await Alumno.findById(req.params.id);
    let asistencia = await alumno.asistencia.find(r => r._id == req.body._id);
    asistencia.set(req.body);
    const index = alumno.registro.findIndex(element => element._id == req.body._id);
    alumno.asistencia.set(index, asistencia);
    try {
        await Alumno.updateOne({ _id: req.params.id }, alumno);
        res.json({
            'status': '1',
            'msg': 'Asistencia updated'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

alumnoCtrl.addUsuario = async (req, res) => {
    const vusuario = new Usuario(req.body);
    const valumno = await Alumno.findById(req.params.id);
    valumno.usuario=vusuario;
    var x = new Boolean(false);
    const log = await Usuario.find().where('username').equals(req.body.username)
    if (log[0] == null) {
        try {
            if (vusuario.perfil == null) {
                const rol = await Rol.findOne({ nombre: "alumno" });
                vusuario.perfil = rol;
            }
            vusuario.password = await Usuario.encryptPassword(req.body.password);
            await Alumno.updateOne({_id: req.params.id}, valumno);
            await vusuario.save();
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
    }else{
        res.json({
            'status': '2',
            'msg': 'Usuario Existente, Con el mismo Username'
        })
    }
}

alumnoCtrl.editUsuario = async (req, res) => {
    const valumno = await Alumno.findById(req.params.id);
    const vusuario = new Usuario(req.body);
    valumno.usuario.set(vusuario); 
}

module.exports = alumnoCtrl;