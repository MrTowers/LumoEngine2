import { GameObject } from "../../../core/objects/GameObject.js";
import { GameManagerScript } from "./GameManagerScript.js";
export class GameManager extends GameObject {
    constructor() {
        super("game manager");
        this.script = new GameManagerScript();
        this.addComponent(this.script);
    }
}
