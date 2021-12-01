/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */
import { LUMO_ENGINE2 } from "../../../LumoEngine2.js";
export function registerScene(scene, name = "") {
    LUMO_ENGINE2.scenes[name] = scene;
}
