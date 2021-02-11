const express = require('express'); 
const http = require('http'); 
const route = require('./route/task.routes'); //Importa las rutas que se definen como endpoint de la API
const config = require('./config'); //Se importa la configuracion de las variables de entorno de la app
const morgan = require('morgan'); //Se importa morgan para ir viendo las peticiones que llegan por consola
const cors = require('cors');

//settings
const app = express();  //Crear el app de mi aplicacion
const server = http.createServer(app); //Crear un server a traves del objeto http

//Middleware
const corsoption = {
    origin: '*'
}
app.use(cors(corsoption));
app.use(morgan('dev')); //Para poder ver las peticiones que llegan por la consola
app.use(express.json()); //Para poder trabajar con objetos json.
app.use(express.urlencoded({extended: false})) //Permite que la app pueda recibir las peticiones desde formularios html

//routes
app.set('port', config.PORT); //Se define el puerto por defecto o si viene de alguna variable de entorno

app.get('/', (req, res) => { //Retorno un mensaje para las llamadas http a la raiz del proyecto.
    res.json({message: "Welcome to my application"})
})

app.use('/api/task',route); //Se cargan las rutas o endpoint a traves de /api/task

module.exports = {app, server}; //Se exporta las variables app y server para el archivo index.js