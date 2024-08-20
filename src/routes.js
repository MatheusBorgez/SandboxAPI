const express = require('express');
const routes = express.Router();

const movieController = require('./controllers/movieController');

routes.get('/movies', movieController.list)
routes.get('/movies/:id', movieController.list)
routes.post('/movies', movieController.create)
routes.put('/movies/:id', movieController.update)
routes.delete('/movies/:id', movieController.delete)

module.exports = routes;