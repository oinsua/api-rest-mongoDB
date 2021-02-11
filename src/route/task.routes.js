const express = require('express')
const route = express.Router(); //Se crea el objeto rutas para especificar todos los endpoint de la api
const controllerTask = require('../controller/controllerTask'); //Se importan todas las funciones que permiten realizar las operaciones
const { body } = require('express-validator');

const { findAllTask, insertNewTask, findOneTask, deleteOneTask, findAllDoneTrue, findUpdateTask} = controllerTask; //destructuracion

 route.get('/', findAllTask); //Se obtienen todas las tareas

 route.get('/done', findAllDoneTrue); //Se obtienen solo las tareas que tienen {done: true}

 route.get('/:id', findOneTask); //Se obtiene una tarea a partir de especiicar el id
 
 route.put('/:id', findUpdateTask); //Se actualiza una tarea a partir de su id

 route.delete('/:id', deleteOneTask); //Se elimina una tarea a partir de especificar su id

 route.post('/',[
                // username must be an email
                body('username').isEmail(),
                // password must be at least 5 chars long
                body('password').isLength({ min: 5 })],
                insertNewTask); //Se inserta una nueva tarea en la collections

module.exports = route
