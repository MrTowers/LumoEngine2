/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */
import { Component } from "../../objects/Component.js";
export class ParticleSystem extends Component {
    constructor() {
        super();
        this.emitters = [];
    }
    update(delta) {
        for (let i in this.emitters) {
            this.emitters[i].update(delta);
        }
    }
    addEmitter(emitter) {
        this.emitters.push(emitter);
    }
    play() {
        for (let i in this.emitters) {
            this.emitters[i].play();
        }
    }
    stop() {
        for (let i in this.emitters) {
            this.emitters[i].stop();
        }
    }
    burst() {
        for (let i in this.emitters) {
            this.emitters[i].burst();
        }
    }
}
