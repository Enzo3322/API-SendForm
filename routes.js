const { Router } = require('express');
const Formulario = require('./controllers/FormularioController');

const routes = new Router();

routes.post('/formulario', Formulario.store);

module.exports = routes;
