const mongoose = require("mongoose");
const URI = "mongodb://localhost/grupo11";

mongoose
  .connect(URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:true,
    useCreateIndex:true
  })
  .then((db) => console.log("Base de Datos Conectada"))
  .catch((err) => console.error(err));

module.exports = mongoose;