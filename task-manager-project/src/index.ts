import { TaskManager } from "./services/TaskManager";

const taskManager = new TaskManager();

taskManager.addTask("Buy groceries", "Milk, Eggs, Bread");
taskManager.addTask("Study TypeScript", "Learn about classes and interfaces");

console.log("Current Tasks:", taskManager.getTasks());

taskManager.markTaskComplete("Buy groceries");

console.log("Updated Tasks:", taskManager.getTasks());
