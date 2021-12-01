/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */
import { LUMO_ENGINE2 } from "../../LumoEngine2.js";
export function playSound(sound) {
    LUMO_ENGINE2.sounds[sound].play();
}
