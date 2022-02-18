const express = require("express")
const router = express.Router()

router.get('/', (req, res, next) => {
  res.render("home.hbs")
})

router.get('/about', (req, res, next) => {
  // res.render("about.hbs")
  // next() // como salta esta ruta y ve a la siguiente
  next("Error de Servidor o de API") // voy a saltar al error handler 500

  // ejemplo real de como manejaremos errores internos dentro de las ruta
  // dogApi.findDogds()
  // .then((response) => console.log(response))
  // .catch((err) => next("error en api de perritos L53" + err))

})

router.get('/my-hobbies', (req, res, next) => {
  res.render("my-hobbies.hbs") // 200 o 304
})

module.exports = router;