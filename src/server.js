const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
const env = require('../config');

const server = express();

mongoose.connect(env.DB_CONFIG, { useNewUrlParser: true });

server.use(express.json());
server.use(routes);

server.listen(3333);
