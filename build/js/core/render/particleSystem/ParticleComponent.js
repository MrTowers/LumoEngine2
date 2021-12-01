/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */
export class ParticleComponent {
    constructor(particle) {
        this.particle = particle;
    }
    update(delta) {
    }
    clone(particle) {
        let p = new ParticleComponent(particle);
        return p;
    }
    init() {
    }
}
