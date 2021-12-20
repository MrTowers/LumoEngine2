/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */
export class AudioSource {
    constructor(src = "") {
        this.src = src;
        this.audio = new Audio(this.src);
    }
    getAudio() {
        return new Audio(this.src);
    }
}
