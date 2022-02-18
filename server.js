// Gets access to environment variables/settings
require('dotenv').config()


// Connects to the database... if we had one :( 
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/db-test")
.then((response) => {
  console.log("Conectado a base de datos")
})
.catch((error) => {
  console.log("Error conectando a BD")
})



// Handles http requests (express is node js framework)
const express = require('express');
const app = express();


// Handles the handlebars
const hbs = require("hbs");


// This part runs most pieces of middleware
app.use(express.static("public")) // ejecuta esta funcion
app.set('view engine', 'hbs'); // configura esta opcion
app.set('views', __dirname + '/views/' )
const logger = require("morgan")
app.use(logger("dev"))
const favicon = require('serve-favicon')
app.use(favicon(__dirname + "/public/images/favicon.ico"))


// Local Variables 
app.locals.name = "Jorge" // express crea esta propiedad como variable local


// 👇 Start handling routes here
app.get('/', (req, res, next) => {
  res.render("home.hbs")
})

app.get('/about', (req, res, next) => {
  // res.render("about.hbs")
  // next() // como salta esta ruta y ve a la siguiente
  next("Error de Servidor o de API") // voy a saltar al error handler 500

  // ejemplo real de como manejaremos errores internos dentro de las ruta
  // dogApi.findDogds()
  // .then((response) => console.log(response))
  // .catch((err) => next("error en api de perritos L53" + err))

})

app.get('/my-hobbies', (req, res, next) => {
  res.render("my-hobbies.hbs") // 200 o 304
})


// To handle errors.
// errores 404 not found
app.use((req, res) => {
  // si la solicitud no entro dentro de alguna ruta, pasa por este middleware
  res.status(404).render("not-found.hbs")
})
// errores 500 Internal server error
// con esto 4 parametros en este orden, express sabe que esto es para recibir errores 500
app.use((err, req, res, next) => {

  console.log(err)
  res.status(500).render("error.hbs")

})


// Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});