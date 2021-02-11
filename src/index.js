const {server, app} = require('./app'); //Importando las variables server y app
require('./database'); //Se importa la conexion a la base de datos

   server.listen(app.get('port'), () => console.log(`Server has started on port ${app.get('port')}`));