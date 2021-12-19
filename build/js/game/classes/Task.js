import { Vector2 } from "../../core/math/Vector2.js";
export class Task {
    constructor(name = "none", workertype = "worker", position = new Vector2(), arrive = () => { }, ondone = () => { }, time = 5, taskType = "idling") {
        this.name = name;
        this.position = position;
        this.arrive = arrive;
        this.ondone = ondone;
        this.time = time;
        this.workertype = workertype;
        this.taskType = taskType;
    }
    done() {
        this.ondone();
        if (this.nextTask) {
            this.worker.setTask(this.nextTask);
            return;
        }
        this.worker.state = "idle";
        this.worker.accualTask = new Task();
    }
}
