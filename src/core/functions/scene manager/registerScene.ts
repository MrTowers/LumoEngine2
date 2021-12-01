/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */

import { LUMO_ENGINE2 } from "../../../LumoEngine2.js";
import { Scene } from "../../objects/Scene.js";

export function registerScene (scene: Scene, name = "") {
    LUMO_ENGINE2.scenes[name] = scene;
}