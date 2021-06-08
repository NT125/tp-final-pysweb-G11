var express = require("express");
var app = express();
const { mongoose } = require("./database");
const cors = require("cors");

app.use(express.json());
app.use(cors({ origin: "http://localhost:4200" }));


app.use('/api/pago', require('./routes/pago.route.js'));
app.use('/api/plan', require('./routes/plan.route.js'));
app.use('/api/rutina', require('./routes/rutina.routes'));
app.use('/api/entrenador', require('./routes/entrenador.routes'));
//app.use('/api/agente, require('./routes/agente.route.js'));

app.set("port", process.env.PORT || 3000);

//prueba de comentario

app.listen(app.get("port"), () => {
  console.log(`Server started on port`, app.get("port"));
});