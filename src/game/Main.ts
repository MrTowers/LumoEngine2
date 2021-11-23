import { spawnGameObject } from "../core/functions/spawnGameObject.js";
import { GameObject } from "../core/objects/GameObject.js";
import { Sprite } from "../core/render/Sprite.js";
import { CameraController } from "./CameraController.js";

export function main() {
    let player = new GameObject();
    player.addComponent(new CameraController());
    spawnGameObject(player);

    let sprite = new GameObject();
    let sp = new Sprite("LUMO_light");
    sp.setSize(100);
    sprite.addComponent(sp);
    spawnGameObject(sprite);
}