import { Particle } from "../Particle.js";
import { ParticleComponent } from "../ParticleComponent.js";

export class PA_Gravity extends ParticleComponent {
    gravity: number;
    constructor (particle: Particle, gravity = 9.8) {
        super(particle);
        this.gravity = gravity;
    }

    update (delta: number) {
        this.particle.velocity.y += this.gravity * (delta / 1000);
    }

    clone (particle: Particle) {
        let gr = new PA_Gravity(particle, this.gravity);
        return gr;
    }
}