import { GameObject } from "../../../core/objects/GameObject.js";
import { TaskerScript } from "./TaskerScript.js";
export class Tasker extends GameObject {
    constructor() {
        super("tasker");
        this.script = new TaskerScript();
        this.addComponent(this.script);
    }
}
