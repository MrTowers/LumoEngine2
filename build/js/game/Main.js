import { spawnGameObject } from "../core/functions.js";
import { Entity } from "./Entity.js";
export function main() {
    let en = new Entity();
    spawnGameObject(en);
}
