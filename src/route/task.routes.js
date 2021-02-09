const express = require('express')
const route = express.Router();
const taskModel = require('../model/task');

 route.get('/', (req, res) => {
     res.json('task');
 })

 route.post('/', async (req, res) => {
     const newTask = new taskModel({
         title: req.body.title,
         description: req.body.description
     })
    await newTask.save();
     res.json('saving a new task');
 })

module.exports = route
