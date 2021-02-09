const {server, app} = require('./app');
const mongoose = require('./database');

   

server.listen(app.get('port'), () => console.log(`Server has started on port ${app.get('port')}`));