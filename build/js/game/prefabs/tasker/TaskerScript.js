import { Component } from "../../../core/objects/Component.js";
import { Task } from "../../classes/Task.js";
export class TaskerScript extends Component {
    constructor() {
        super("taskerscript");
        this.tasks = [];
    }
    getNewTask(workertype) {
        if (this.tasks.length > 0) {
            for (let i in this.tasks) {
                let t = this.tasks[i];
                if (t.workertype == workertype) {
                    this.tasks.splice(this.tasks.indexOf(t), 1);
                    return t;
                }
            }
            return new Task();
        }
        else {
            return new Task();
        }
    }
    addTask(task) {
        this.tasks.push(task);
    }
}
