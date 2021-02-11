const mongoose = require('mongoose');
const {Schema} = mongoose; //Se importa la funcionalidad Schema para definir la estructura de mi collections en mongodb

const taskSchema = new Schema({ //Se definen las propiedades de l objeto json que se quiere almacenar en mongodb
    title: {
        type: String,
        required: true, //Es requerido
        trim: true  //Eliminar los espacios en blancos 
    },
    description: {
        type: String,
        trim: true
    },
    done: {
        type: Boolean,
        default: false //En caso de no especificarse su valor siempre sera false
    }
}, {
    versionKey: false, //para evitar que en la BD no aparezca __v
    timestamps: true  //Cuando creo una nueva coleccion se agrega una propiedad "createAt" y "updateAt"
}) 

module.exports = mongoose.model('Task', taskSchema);