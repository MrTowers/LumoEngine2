/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */
import { LUMO_ENGINE2 } from "../LumoEngine2.js";
export class Load {
    static texture(src = "", name = "") {
        let x = new Image();
        x.src = `../src/game/${src}`;
        LUMO_ENGINE2.textures[name] = x;
    }
}
