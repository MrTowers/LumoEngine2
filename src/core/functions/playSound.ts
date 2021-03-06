/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */

import { LUMO_ENGINE2 } from "../../LumoEngine2.js";
import { AudioSource } from "../audio/AudioSource.js";

export function playSound (sound: string) {
    LUMO_ENGINE2.sounds[sound].getAudio().play();
}