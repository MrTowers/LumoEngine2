/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */
export class AudioSource {
    constructor(src = "") {
        this.audio = new Audio(`../src/game/${src}`);
    }
}
