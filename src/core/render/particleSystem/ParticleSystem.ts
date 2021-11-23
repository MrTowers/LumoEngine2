import { Component } from "../../objects/Component.js";
import { GameObject } from "../../objects/GameObject.js";
import { ParticleEmitter } from "./ParticleEmitter.js";

export class ParticleSystem extends Component {
    emitters: ParticleEmitter[];
    constructor () {
        super();
        this.emitters = [];
    }

    update(delta: number) {
        for (let i in this.emitters) {
            this.emitters[i].update(delta);
        }
    }

    addEmitter (emitter: ParticleEmitter) {
        this.emitters.push(emitter);
    }
}