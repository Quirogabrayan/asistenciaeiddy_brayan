const express = require('express');
const router = express.Router();
const asistenciamodel = require("../modelo/Asistenciamodelo.js");

router.get("/", asistenciamodel.consultarDetalle);
router.post("/", asistenciamodel.ingresar);

router.route("/:id")
  .get(asistenciamodel.consultarDetalle);

module.exports = router;