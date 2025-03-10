import { Task } from "../models/Task";


export class TaskManager {
  private tasks: Task[] = [];

  addTask(title: string, description: string): void {
    const task = new Task(title, description);
    this.tasks.push(task);
    console.log(`Task "${title}" added successfully.`);
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  markTaskComplete(title: string): void {
    const task = this.tasks.find((t) => t.title === title);
    if (task) {
      task.markComplete();
      console.log(`Task "${title}" marked as complete.`);
    } else {
      console.log(`Task "${title}" not found.`);
    }
  }
}
