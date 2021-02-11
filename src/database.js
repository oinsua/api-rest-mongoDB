const mongoose = require('mongoose');
const {MONGODB_URI} = require('./config'); //Se importan la configuracion de las variables de entorno, para obtener la uri mongodb

//Se establece la conexcion a la bd mongodb
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
                 .then(db => console.log(`db is connected to database ${db.connection.name}`)) //En caso correcto mensaje de exito
                 .catch(error => console.log(`db is not connected, error : ${error}`)) //En caso de error mensaje de error
 
module.exports = mongoose; 