"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TaskManager_1 = require("./services/TaskManager");
const taskManager = new TaskManager_1.TaskManager();
taskManager.addTask("Buy groceries", "Milk, Eggs, Bread");
taskManager.addTask("Study TypeScript", "Learn about classes and interfaces");
console.log("Current Tasks:", taskManager.getTasks());
taskManager.markTaskComplete("Buy groceries");
console.log("Updated Tasks:", taskManager.getTasks());
