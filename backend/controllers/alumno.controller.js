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

alumnoCtrl.addPago = async (req, res) => {
    const vpago = new Pago(req.body);
    const valumno = await Alumno.findById(req.params.id);
    try {
        valumno.pago.push(vpago);
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
    try{
        let pago = await alumno.pago.find(r => r._id == req.body._id);  
        try {
            pago.set(req.body);
            const index = alumno.pago.findIndex(element => element._id == req.body._id);
            alumno.pago.set(index, pago);
            await Alumno.updateOne({ _id: req.params.id }, alumno);
            res.json({
                'status': '1',
                'msg': 'Pago updated'
            })
        }catch (error) {
            res.json({
                'status': '0',
                'msg': 'Error procesando la operacion'
            })
        }
    }catch(error){
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

alumnoCtrl.getPagos = async (req, res) => {
    var alumno = await Alumno.findById(req.params.id);
    try{
        let pagos = await alumno.pago;
        res.json(pagos);
    }catch(error){
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        }) 
    }
}

alumnoCtrl.getPago = async (req, res) => {
    var alumno = await Alumno.findById(req.params.id);
    try{
        let pago = await alumno.pago.find(r => r._id == req.params.idpago);
        res.json(pago);
    }catch(error){
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        }) 
    }
}

alumnoCtrl.addPlan = async (req, res) => {
    const vplan = await Plan.findById(req.body._id);;
    if(vplan!=null){
        const valumno = await Alumno.findById(req.params.id);
        try {
            valumno.plan=vplan;
            await Alumno.updateOne({_id: req.params.id}, valumno);
                res.json({
                    'status': '1',
                    'msg': 'Plan guardado'
                })
        } catch (error) {
            res.json({
                'status': '0',
                'msg': 'Error procesando la operacion'
            })
        }
    }else{
        res.json({
            'status': '2',
            'msg': 'Plan no Existente'
        })
    }
}

alumnoCtrl.addRutina = async (req, res) => {
    const vrutina = await Rutina.findById(req.body._id);
    if(vrutina!=null){
        const valumno = await Alumno.findById(req.params.id);
        try {
            valumno.rutina.push(vrutina);
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
    }else{
        res.json({
            'status': '2',
            'msg': 'Rutina no existente'
        })
    }
}

alumnoCtrl.getRutinas = async (req, res) => {
    var alumno = await Alumno.findById(req.params.id);
    try{
        let rutinas = await alumno.rutina;
        res.json(rutinas);
    }catch(error){
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        }) 
    }
}

alumnoCtrl.addRegistro = async (req, res) => {
    const vregistro = new Registro(req.body);
    const valumno = await Alumno.findById(req.params.id);
    try {
        valumno.registro.push(vregistro);
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

alumnoCtrl.getRegistros = async (req, res) => {
    var alumno = await Alumno.findById(req.params.id);
    try{
        let registros = await alumno.registro;
        res.json(registros);
    }catch(error){
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

alumnoCtrl.getRegistro = async (req, res) => {
    var alumno = await Alumno.findById(req.params.id);
    try{
        let registro = await alumno.registro.find(r => r._id == req.params.idregistro);
        res.json(registro);
    }catch(error){
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

//HASTA ACA LLEGUE
alumnoCtrl.editRegistro = async (req, res) => {
    var alumno = await Alumno.findById(req.params.id);
    try{
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
    }catch(error){
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
    try {
        valumno.asistencia.push(vasistencia);
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
    try{
        let asistencia = await alumno.asistencia.find(r => r._id == req.body._id);
        try{
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
        }catch(error){
            res.json({
                'status': '0',
                'msg': 'Error procesando la operacion'
            })
        }
    }catch(error){
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

alumnoCtrl.getAsistencias = async (req, res) => {
    var alumno = await Alumno.findById(req.params.id);
    try{
        let asistencia = await alumno.asistencia;
        res.json(asistencia);
    }catch(error){
        res.json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        }) 
    }
}

alumnoCtrl.addUsuario = async (req, res) => {
    const valumno = await Alumno.findById(req.params.id);
        const vusuario = new Usuario(req.body);
        const log = await Usuario.find().where('username').equals(req.body.username)
        try{
        if(valumno.usuario==null){
            if (log[0] == null) {
                    valumno.usuario=vusuario;
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
            }else{
                res.json({
                    'status': '2',
                    'msg': 'Usuario Existente, Con el mismo Username'
                })
            }
        }else{
            res.json({
                'status': '3',
                'msg': 'Este alumno ya posee un usuario'
            })
        }
    }catch(error){
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

alumnoCtrl.editUsuario = async (req, res) => {
    const valumno = await Alumno.findById(req.params.id);
    console.log(valumno.usuario._id);
    try{
        if(req.body._id==valumno.usuario._id){
            const vusuario = new Usuario(req.body);
            await Usuario.updateOne({_id: req.body._id}, vusuario);
            valumno.usuario=vusuario;
            res.json({
                'status': '1',
                'msg': 'Usuario modificado.'
            })
        }else{
            res.json({
                'status': '2',
                'msg': 'Usuario no encontrado'
            })
        }        
    }catch(error){
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

module.exports = alumnoCtrl;