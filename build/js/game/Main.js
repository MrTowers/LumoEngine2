import { spawnGameObject } from "../core/functions/spawnGameObject.js";
import { Load } from "../core/Load.js";
import { Player } from "./prefabs/Player.js";
export function main() {
    Load.texture("./image.png", "texture");
    spawnGameObject(new Player());
}
