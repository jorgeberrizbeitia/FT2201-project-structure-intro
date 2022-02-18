const mongoose = require("mongoose")

// process.env.MONGODB_URI

mongoose.connect("mongodb://localhost/db-test")
.then((response) => {
  console.log("Conectado a base de datos")
})
.catch((error) => {
  console.log("Error conectando a BD")
})

// no necesito exportar modulos