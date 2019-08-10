const express = require('express');
const DevController = require('./controller/dev.controller');
const LikeController = require('./controller/like.controller');

const routes = express.Router();

routes.post('/dev', DevController.store);
routes.post('/dev/:devId/like', LikeController.store);

module.exports = routes;
