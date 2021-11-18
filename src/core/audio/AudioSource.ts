export class AudioSource {
    audio: HTMLAudioElement;

    constructor (src = "") {
        this.audio = new Audio(`../src/game/${src}`);
    }
}