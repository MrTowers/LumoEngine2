/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */

export class AudioSource {
    audio: HTMLAudioElement;
    src: string;

    constructor (src = "") {
        this.src = src;
        this.audio = new Audio(this.src);
    }

    getAudio () : HTMLAudioElement {
        return new Audio(this.src);
    }
}