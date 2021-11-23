import { Particle } from "./Particle.js";

export class ParticleComponent {
    particle: Particle;
    constructor (particle: Particle) {
        this.particle = particle;
    }

    update (delta: number) {
        
    }
}