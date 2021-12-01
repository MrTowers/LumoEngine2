/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */

import { LUMO_ENGINE2 } from "../../../LumoEngine2.js";

export function loadScene (name: string) {
    LUMO_ENGINE2.scene = LUMO_ENGINE2.scenes[name];
}