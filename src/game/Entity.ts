import { Color } from "../core/math/Color.js";
import { GameObject } from "../core/objects/GameObject.js";
import { Box } from "../core/render/Box.js";
import { AIController } from "./Control/AIController.js";

export class Entity extends GameObject {
    health: number;
    walkSpeed: number;

    constructor () {
        super();
        this.health = 20;
        this.walkSpeed = 2;
        this.addComponent(new AIController());
        this.addComponent(new Box(20, 20, new Color(0, 255, 0, 1)));
    }
}