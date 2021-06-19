//importamos el manejador de token
const jwt = require('jsonwebtoken');
const Usuario=require('../models/usuario');
const Rol=require('../models/rol')
const authCtrl = {}
let payload;
authCtrl.verifyToken = async (req, res, next) => {
   //las llamadas a la API debieran tener un header authorization
   if (!req.headers.authorization) {
      res.json({ 'status': '0', 'msg': 'Unauthorized request.' })
   }
   //se espera formato -> Bearer XXX, interesa el token en pos(1) del arrayTexto
   var arrayTexto = req.headers.authorization.split(' ');
   var token = null;
   (arrayTexto.length >= 2) ? token = arrayTexto[1] : token = null;
   if (token == null) {
      res.json({ 'status': '0', 'msg': 'Unauthorized request.' });
   } else {
      try {
         payload =jwt.verify(token, "secretkey");
         //payload retorna la información del user que se uso en el método de login
         req.userId = payload;
         next(); //se pasa a procesar el siguiente método del stack de la peticion
      } catch (error) {
         res.json({ 'status': '0', 'msg': 'Unauthorized request.' });
      }
   }
}
authCtrl.isAdmin = async (req, res, next) => {
   
   //las llamadas a la API debieran tener un header authorization
  if (!req.headers.authorization) {
      res.json({ 'status': '0', 'msg': 'Unauthorized request.' })
   }
   //se espera formato -> Bearer XXX, interesa el token en pos(1) del arrayTexto
   var arrayTexto = req.headers.authorization.split(' ');
   var token = null;
   (arrayTexto.length >= 2) ? token = arrayTexto[1] : token = null;
   if (token == null) {
      res.json({ 'status': '0', 'msg': 'Unauthorized request.' });
   } else {
      try {
          payload = jwt.verify(token, "secretkey");
         const usuario = await Usuario.findById(payload.id);
         const rol = await Rol.findById(usuario.perfil);
         if (rol.nombre == 'alumno') {
            res.json({ 'status': '0', 'msg': 'No tiene los permisos suficientes.' });
         } else {
            next();  
         }
         
      } catch (error) {
         res.json({ 'status': '0', 'msg': 'Unauthorized request.' });
      }
   }
}
module.exports = authCtrl;

