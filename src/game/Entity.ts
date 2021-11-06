import { Color } from "../core/math/Color.js";
import { GameObject } from "../core/objects/GameObject.js";
import { Box } from "../core/render/Box.js";
import { Sprite } from "../core/render/Sprite.js";
import { AIController } from "./Control/AIController.js";
import { PlayerController } from "./Control/PlayerController.js";

export class Entity extends GameObject {
    constructor () {
        super();
        this.addComponent(new AIController());
        this.addComponent(new Sprite());
    }
}