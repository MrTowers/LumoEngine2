export class AudioSource {
    constructor(src = "") {
        this.audio = new Audio(`../src/game/${src}`);
    }
}
