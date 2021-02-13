const taskModel = require('../model/task');//Se importa el modelo a traves del cual se pueden ejecutar las operaciones sobre mongodb
const Pagination = require('../libs/getPage');
const { validationResult, param } = require('express-validator');
const {getPage} = Pagination;

const findAllTask = async (req, res) => { //Se devuelven todas las tareas
    /*Agregar los validadores a traves de express-validator con un status 400 */
    try {
        //Para realizar la paginacion
       /*  const {size, page} = req.query; //destructuracion
        const {limit, offset} = getPage(size, page); */
        //const tasks = await taskModel.paginate({}, {offset, limit});
        const tasks = await taskModel.find();
        console.log('task devueltas: ', tasks);
         res.json(tasks);
    } catch (error) {
        res.status(500).json({
             message: "Error: All Task not founded"
        })
    }
}

const insertNewTask = async (req, res) => { //Se inserta una nueva tarea
    try {
        // Encuentra los errores de validacion y los devuelve en forma de json con la informacion correspondiente
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        
        const {title, description, done} = req.body; //Se obtienen los valores de las propiedades
        const newTask = new taskModel({ //Se especifican las propiedades del objeto json a insertar
            title,
            description,
            done: done ? done : false
        })
       
       const tasksave = await newTask.save(); //Se realiza la llamada a mongodb para insertar
        res.json(tasksave); //Se devuelve un mensaje con el nuevo objeto
    } catch (error) {
        res.status(500).json({
            message: "Error: Inserting a new Task"
        })
    }
}

const findOneTask = async (req, res) => { //Se encuentra una tarea a partir de especiicar su id
    try { 
         // Encuentra los errores de validacion y los devuelve en forma de json con la informacion correspondiente
         const errors = validationResult(req);
         if (!errors.isEmpty()) {
         return res.status(422).json({ errors: errors.array() });
         }
        const task = await taskModel.findById(req.params.id); //Se busca la tarea
        res.json(task); //Se devuelva la tarea
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}

const deleteOneTask = async (req,res) => { //Se elimina una tarea a partir de especificar su id
    try {
        // Encuentra los errores de validacion y los devuelve en forma de json con la informacion correspondiente
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
        }
        await taskModel.findByIdAndDelete(req.params.id); //Se busca y se elimina la tarea
        res.json({ //Se emite un mensaje 
        message: `Task ${req.params.id} have been delete successfully`
    });
    } catch (error) {
        res.status(500).json({
            message:error
        })
    }
}

const findAllDoneTrue = async (req, res) => { //Se devuelven todas las tareas que cumplen con la condicion {done: true}
    try {
        const tasks = await taskModel.find({done: true});
        res.json(tasks);
    } catch (error) {
        res.status(500).json({
            message: error
        }) 
    }
}

const findUpdateTask = async (req, res) => { //Se actualiza un tarea a partir de su id, se especifican las propiedades y valores
    try {
        // Encuentra los errores de validacion y los devuelve en forma de json con la informacion correspondiente
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
        }
        await taskModel.findByIdAndUpdate(req.params.id, req.body);
        res.json('Task was update successfully');
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}

module.exports = {findAllTask, insertNewTask, findOneTask, deleteOneTask, findAllDoneTrue, findUpdateTask}