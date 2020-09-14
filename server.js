const express = require('express');

const usersRouter = require('./users/users-router.js');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  res.status(200).json({ api: "up" })
});

module.exports = server;