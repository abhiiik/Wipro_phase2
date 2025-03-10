"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
const Task_1 = require("../models/Task");
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    addTask(title, description) {
        const task = new Task_1.Task(title, description);
        this.tasks.push(task);
        console.log(`Task "${title}" added successfully.`);
    }
    getTasks() {
        return this.tasks;
    }
    markTaskComplete(title) {
        const task = this.tasks.find((t) => t.title === title);
        if (task) {
            task.markComplete();
            console.log(`Task "${title}" marked as complete.`);
        }
        else {
            console.log(`Task "${title}" not found.`);
        }
    }
}
exports.TaskManager = TaskManager;
