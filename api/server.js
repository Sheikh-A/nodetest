const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');
const clientsRouter = require('../clients/clients-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/jokes', authenticate, jokesRouter);
server.use('/api/clients', clientsRouter);

server.get('/', (req, res) => {
    res.status(200).send((`<h1>API: Up Up and Away, welcome Flexporters!</h1>`))
})

server.get('/', (req, res) => {
    res.status(200).send(('<h1>Hello Flexporters!</h1>'))
})

module.exports = server;
