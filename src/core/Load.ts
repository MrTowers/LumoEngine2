import { RIM_WORLD } from "../RimWorld.js";

export class Load {
    static texture (src = "", name = "") {
        let x = new Image();
        x.src = `../src/game/${src}`;
        RIM_WORLD.textures[name] = x;
    }

    static sound (src = "", name = "") {
        let x = new Audio(`../src/game/${src}`);
        RIM_WORLD.sounds[name] = x;
    }
}