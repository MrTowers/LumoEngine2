import { GameObject } from "../core/objects/GameObject.js";
import { Sprite } from "../core/render/Sprite.js";
import { AIController } from "./Control/AIController.js";
export class Entity extends GameObject {
    constructor() {
        super();
        this.addComponent(new AIController());
        this.addComponent(new Sprite());
    }
}
