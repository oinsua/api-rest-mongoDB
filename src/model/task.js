const mongoose = require('mongoose');
const {Schema} = mongoose;

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true 
    },
    description: {
        type: String,
        trim: true
    },
    done: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false, //para evitar que en la BD no aparezca __v
    timestamps: true  //Cuando creo una nueva coleccion se agrega una propiedad "createAt" y "updateAt"
}) 

module.exports = mongoose.model('Task', taskSchema);