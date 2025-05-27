var express = require('express');
var cors = require("cors");
var serverless = require('serverless-http');
var port = process.env.PORT || 5000;
var app = express();
var asigroutes = require("../../backend/routes/asignaturaruta.js");

app.use(express.json());
app.use(cors());

var router = express.Router();
router.use("/asignaturas", asigroutes);

var handler = app.use('/.netlify/functions', router);
module.exports.handler = serverless(app);