/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */

import { Particle } from "./Particle.js";

export class ParticleComponent {
    particle: Particle;

    constructor (particle: Particle) {
        this.particle = particle;
    }

    update (delta: number) {
        
    }

    clone (particle: Particle) : ParticleComponent {
        let p = new ParticleComponent(particle);
        return p;
    }

    init () {
        
    }
}