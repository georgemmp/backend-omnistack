const express = require('express');
const DevController = require('./controller/dev.controller');

const routes = express.Router();

routes.post('/dev', DevController.store);

module.exports = routes;
