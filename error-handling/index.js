const errorHandling = (app) => {

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

}

module.exports = errorHandling