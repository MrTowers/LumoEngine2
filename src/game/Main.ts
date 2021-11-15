import { spawnGameObject } from "../core/functions/spawnGameObject.js";
import { Load } from "../core/Load.js";
import { GameObject } from "../core/objects/GameObject.js";
import { Sprite } from "../core/render/Sprite.js";
import { LUMO_ENGINE2 } from "../LumoEngine2.js"

export function main () {
    Load.texture("4.png", "t");
    let go = new GameObject();
    let s = new Sprite(LUMO_ENGINE2.textures["t"]);
    go.addComponent(s);
    spawnGameObject(go);
    setInterval(() => {
        LUMO_ENGINE2.camera.position.y ++;
    }, 500);
}