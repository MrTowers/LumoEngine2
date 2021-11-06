import { spawnGameObject } from "../core/functions.js";
import { Color } from "../core/math/Color.js";
import { PlayerController } from "./Control/PlayerController.js";
import { Entity } from "./Entity.js";
export function main() {
    let en = new Entity();
    let pl = new Entity();
    pl.addComponent(new PlayerController());
    let box = pl.getComponentByTag("box");
    box.color = new Color(255, 255, 0, 1);
    spawnGameObject(pl);
    spawnGameObject(en);
}
