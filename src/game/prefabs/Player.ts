import { GameObject } from "../../core/objects/GameObject.js";
import { Sprite } from "../../core/render/Sprite.js";
import { PlayerController } from "../scripts/PlayerController.js";

export class Player extends GameObject {
    constructor () {
        super("player");
        this.addComponent(new PlayerController());
        this.addComponent(new Sprite("texture"));
    }
}