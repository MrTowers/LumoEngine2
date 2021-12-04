import { GameObject } from "../core/objects/GameObject.js";
import { Sprite } from "../core/render/Sprite.js";
import { PostacScript } from "./PostacScript.js";
export class Postac extends GameObject {
    constructor() {
        super();
        let sprite = new Sprite("LUMO_light");
        this.addComponent(sprite);
        this.addComponent(new PostacScript());
    }
}
