const mongoose = require("mongoose");
const URI = "mongodb://localhost/grupo11";

mongoose
  .connect(URI)
  .then((db) => console.log("Base de Datos Conectada"))
  .catch((err) => console.error(err));

module.exports = mongoose;