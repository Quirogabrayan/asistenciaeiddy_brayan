const express = require('express');
const router = express.Router();
const asignaturamodel = require("../modelo/Asignaturamodelo.js");

router.get("/", asignaturamodel.consultarDetalle);
router.post("/", asignaturamodel.ingresar);

router.route("/:codigo")
  .get(asignaturamodel.consultarDetalle);

module.exports = router;