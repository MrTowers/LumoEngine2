import { GameObject } from "../../core/objects/GameObject.js";
import { ControllerScript } from "./ControllerScript.js";
export class Controller extends GameObject {
    constructor() {
        super("controller");
        this.addComponent(new ControllerScript());
    }
}
