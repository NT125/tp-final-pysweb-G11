var express = require("express");
var app = express();
const { mongoose } = require("./database");
const cors = require("cors");
const rolCtrl=require("./libs/inicioSetup");
app.use(express.json());
app.use(cors({ origin: "http://localhost:4200" }));

rolCtrl.createRol();
app.use('/api/plan', require('./routes/plan.route.js'));
app.use('/api/rutina', require('./routes/rutina.routes'));
app.use('/api/usuarios', require('./routes/usuario.route'));
app.use('/api/ejercicio', require('./routes/ejercicio.routes.js'));

app.use('/api/alumno', require('./routes/alumno.route'));
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
  console.log(`Server started on port`, app.get("port"));
});