const { Op } = require("sequelize");
const taskModel = require('../models/task.model');


// Retrieve all tasks
exports.getAllTasks = async () => {
    let taskArray = await taskModel.findAll();
    return taskArray;
};


// Retrieve a single task by its ID
exports.getTaskById = async (taskId) => {
    let taskObj = await taskModel.findByPk(taskId);
    return taskObj;
};


// Add a new task
exports.addTask = async (taskData) => {
    await taskModel.create(taskData);
    return "Task added successfully";
};
 

// Update an existing task by its ID
exports.updateTask = async (taskData) => {
    await taskModel.update(taskData, { where: { id: taskData.id } });
    return "Task updated successfully";
};


// Delete a task by its ID
exports.deleteTaskById = async (id) => {
    await taskModel.destroy({ where: { id: id } });
    return "Task deleted successfully";
};