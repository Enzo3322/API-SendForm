const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); 
const routes = require('./routes');

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(express.static(path.resolve(__dirname, '..', 'frontend'))
    );
    this.server.use(bodyParser.urlencoded({ extended: false }))
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
