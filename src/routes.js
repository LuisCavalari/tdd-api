const routes = require('express').Router()

routes.get('/', (request, response) => {
    response.send({ message: 'Hello World' })
});

module.exports = routes