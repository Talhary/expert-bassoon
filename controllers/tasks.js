const TaskSchema = require('../models/tasks.js')
const getAllTasks = (req,res) =>{
    res.send('get all Tasks')
}
const createTask = (req,res) =>{
    res.send('create new task')
}
const getTask = (req,res) =>{
    res.send('get single task')
}
const updateTask = (req,res) =>{
    res.send('update existing tasks')
}
const deleteTask = (req,res) =>{
    res.send('delete task')
}
module.exports = {getAllTasks , createTask,getTask, updateTask,deleteTask}