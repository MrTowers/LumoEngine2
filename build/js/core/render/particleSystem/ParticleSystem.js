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
}
