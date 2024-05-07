const taskService = require('../services/task.service');

// Retrieve all tasks
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await taskService.getAllTasks();
        console.log("[GET ALL] Number of Tasks: " + tasks.length);
        res.send(tasks);
    } catch (error) {
        console.error("Error while retrieving tasks:", error);
        res.status(500).send("Internal Server Error");
    }
};

// Retrieve a single task by its ID
exports.getTaskById = async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = await taskService.getTaskById(taskId);
        if (!task) {
            res.status(404).send("Task not found");
            return;
        }
        res.send(task);
    } catch (error) {
        console.error("Error while retrieving task by ID:", error);
        res.status(500).send("Internal Server Error");
    }
};

// Add a new task
exports.addTask = async (req, res) => {
    try {
        const taskData = req.body;
        await taskService.addTask(taskData);
        res.status(201).send({ message: "Task added successfully", task: taskData });
        
    } catch (error) {
        console.error("Error while adding task:", error);
        res.status(500).send("Internal Server Error");
    }
};

// Update an existing task by its ID
exports.updateTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const taskData = req.body;
        taskData.id = taskId; // Ensure task ID is included in the data
        await taskService.updateTask(taskData);
        res.status(200).send({ message: "Task updated successfully", task: taskData });
    } catch (error) {
        console.error("Error while updating task:", error);
        res.status(500).send("Internal Server Error");
    }
};

// Delete a task by its ID
exports.deleteTaskById = async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = await taskService.getTaskById(taskId);
        await taskService.deleteTaskById(taskId);
        res.status(200).send({ message: "Task deleted successfully", task: task });
    } catch (error) {
        console.error("Error while deleting task:", error);
        res.status(500).send("Internal Server Error");
    }
};