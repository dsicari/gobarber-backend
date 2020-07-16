// Com Sucrase podemos fazer o import, que eh uma 
// feature do js ainda nao disponivel no node
import express from 'express';
// Caso contrario, utilizar require
const routes = require('./routes');

class App {
  constructor(){
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares(){
    // permitir requisicoes em formato json
    this.server.use(express.json());
  }

  routes(){
    this.server.use(routes);
  }

}

module.exports = new App().server;