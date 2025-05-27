const express = require('express');
const router = express.Router();
const estudiantemodel = require("../modelo/Estudiantemodelo.js");

router.get("/", estudiantemodel.consultarDetalle);
router.post("/", estudiantemodel.ingresar);

router.route("/:codigo")
  .get(estudiantemodel.consultarDetalle);

module.exports = router;