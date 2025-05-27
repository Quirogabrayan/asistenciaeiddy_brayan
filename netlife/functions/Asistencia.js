var express = require('express');
var cors = require("cors");
var serverless = require('serverless-http');
var port = process.env.PORT || 5000;
var app = express();
var asisroutes = require("../../backend/routes/asistenciaruta.js");

app.use(express.json());
app.use(cors());

var router = express.Router();
router.use("/asistencias", asisroutes);

var handler = app.use('/.netlify/functions', router);
module.exports.handler = serverless(app);