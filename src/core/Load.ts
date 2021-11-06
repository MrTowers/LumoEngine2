import { RIM_WORLD } from "../RimWorld.js";

export class Load {
    static texture (src = "", name = "") {
        let x = new Image();
        x.src = src;
        RIM_WORLD.textures[name] = x;
    }
}