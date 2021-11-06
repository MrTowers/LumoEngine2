import { spawnGameObject } from "../core/functions.js";
import { Color } from "../core/math/Color.js";
import { GameObject } from "../core/objects/GameObject.js";
import { Box } from "../core/render/Box.js";
import { Engine } from "../core/render/Engine.js";
import { PlayerController } from "./Control/PlayerController.js";
import { Entity } from "./Entity.js";

export function main () {
    let en = new Entity();
    let pl = new Entity();
    pl.addComponent(new PlayerController());
    let box = <Box>pl.getComponentByTag("box");
    box.color = new Color(255, 255, 0, 1);
    spawnGameObject(pl);
    spawnGameObject(en);
}