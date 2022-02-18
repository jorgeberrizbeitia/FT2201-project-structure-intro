// Gets access to environment variables/settings
require('dotenv').config()


// Connects to the database... if we had one :( 
require("./db") // si seleccionamos solo carpeta, el busca archivo index.js



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
const indexRoutes = require("./routes")
app.use("/", indexRoutes) // este middleware va a leer todas las rutas en "/routes/index.js"


// To handle errors.
// pues aqui, invoco la function de errorHandling y le paso app
const errorHandling = require("./error-handling")
errorHandling(app)


module.exports = app