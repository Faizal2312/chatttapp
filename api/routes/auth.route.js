const express = require('express')
const server = express.Router();
const {login,signup,logout} = require('../controllers/auth.controller')

server.post('/signup',signup)
server.post('/login',login)
server.post('/logout',logout)

module.exports = server;