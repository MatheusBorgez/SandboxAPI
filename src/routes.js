const express = require('express');
const routes = express.Router();

const movieController = require('./controllers/movieController');

routes.get('/', movieController.list)
routes.post('/', movieController.create)
routes.put('/:id', movieController.update)
routes.delete('/:id', movieController.delete)

module.exports = routes;