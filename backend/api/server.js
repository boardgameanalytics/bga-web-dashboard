const express = require('express');
const router = require('./router');
const db = require('../db-config')

const server = express();

server.use(express.json());
server.use('/', router);

server.get('/', (req, res) => {
  res.send('Hello World')
})

server.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;