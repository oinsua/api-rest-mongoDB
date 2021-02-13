const express = require('express')
const route = express.Router(); //Se crea el objeto rutas para especificar todos los endpoint de la api
const controllerTask = require('../controller/controllerTask'); //Se importan todas las funciones que permiten realizar las operaciones
const { check, param } = require('express-validator');


const { findAllTask, insertNewTask, findOneTask, deleteOneTask, findAllDoneTrue, findUpdateTask} = controllerTask; //destructuracion

 route.get('/', findAllTask); //Se obtienen todas las tareas

 route.get('/done', findAllDoneTrue); //Se obtienen solo las tareas que tienen {done: true}

 route.get('/:id',[
                   //Verificar que el id no es vacio, que esta compuesto solo por caracters y numero
                   param('id').isAlphanumeric().withMessage('Id must be a alphanumeric string')
                   ], findOneTask); //Se obtiene una tarea a partir de especiicar el id
 
 route.put('/:id', [
                    //Verificar que el id no es vacio, que esta compuesto solo por caracters y numero
                    param('id').isAlphanumeric().withMessage('Id must be a alphanumeric string')
                    ], findUpdateTask); //Se actualiza una tarea a partir de su id

 route.delete('/:id',[
                    //Verificar que el id no es vacio, que esta compuesto solo por caracters y numero
                    param('id').isAlphanumeric().withMessage('Id must be a alphanumeric string')
                    ],  deleteOneTask); //Se elimina una tarea a partir de especificar su id

 route.post('/',[ 
                // title se le aplica un proceso de validacion, en el se comprueba que no este vacio
                check('title').notEmpty().withMessage('Title not must be null'),
                //Ademas se comprueba que la longitud sea mayor igual que 5
                check('title').isLength({ min: 5 }).withMessage('Length must be greater than 5'),
                //La descripcion no debe ser null.
                check('description').not().isEmpty().withMessage('Description not must be null'),
                check('done').isBoolean().withMessage('Done must be Boolean')] ,
                insertNewTask); //Se inserta una nueva tarea en la collections

module.exports = route
