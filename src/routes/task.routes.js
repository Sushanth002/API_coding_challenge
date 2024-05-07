const express = require('express');
const router = express.Router();

const { taskValidationRules, validate } = require('../middlewares/taskvalidation.middleware');

const {getAllTasks,
    getTaskById,
    addTask,
    updateTask,
    deleteTaskById
} = require('../controllers/task.controller');

// Retrieve all tasks
router.get('/tasks', getAllTasks);

// Retrieve a single task by its ID
router.get('/tasks/:id', getTaskById);

// Add a new task
router.post('/tasks/add',taskValidationRules(), validate, addTask);

// Update an existing task by its ID
router.put('/tasks/update/:id',taskValidationRules(), validate, updateTask);

// Delete a task by its ID
router.delete('/tasks/delete/:id', deleteTaskById);

module.exports = router;