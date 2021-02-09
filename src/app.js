const express = require('express');
const http = require('http');
const route = require('./route/task.routes');
const config = require('./config');
//settings
const app = express();  //Crear el app de mi aplicacion
const server = http.createServer(app); //Crear un server a traves del objeto http
app.use(express.json());
//routes
app.set('port', config.PORT); //Se define el puerto por defecto o si viene de alguna variable de entorno

app.get('/', (req, res) => { //Retorno un mensaje para las llamadas http a la raiz del proyecto.
    res.json({message: "Welcome to my application"})
})

app.use('/api/task',route);

module.exports = {app, server};