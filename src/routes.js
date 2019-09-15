const routes = require('express').Router()
const SessionControler = require('./app/controller/SessionController');

routes.post('/session', SessionControler.store)



module.exports = routes