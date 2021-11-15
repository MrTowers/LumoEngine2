import { GameObject } from "../core/objects/GameObject.js";
import { Sprite } from "../core/render/Sprite.js";
import { LUMO_ENGINE2 } from "../LumoEngine2.js";
import { PlayerController } from "./PlayerController.js";
export class Player extends GameObject {
    constructor() {
        super();
        this.addComponent(new PlayerController());
        this.addComponent(new Sprite(LUMO_ENGINE2.textures["t"]));
    }
}
