const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
                 .then(db => console.log(`db is connected to database ${db.connection.name}`))
                 .catch(error => console.log(`db is not connected, error : ${error}`))
 
module.exports = mongoose; 