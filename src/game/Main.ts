import { spawnGameObject } from "../core/functions.js";
import { GameObject } from "../core/objects/GameObject.js";
import { PlayerController } from "./Control/PlayerController.js";
import { Entity } from "./Entity.js";

export function main () {
    let en = new Entity();
    spawnGameObject(en);
}