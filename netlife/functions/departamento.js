var express = require('express');
var cors = require("cors");
var serverless = require('serverless-http');
var port = process.env.PORT || 5000;
var app = express();
var deproutes = require("../../backend/routes/departamentoruta.js");

app.use(express.json());
app.use(cors());

var router = express.Router();
router.use("/departamentos", deproutes);

var handler = app.use('/.netlify/functions', router);
module.exports.handler = serverless(app);