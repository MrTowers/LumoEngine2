import { ParticleComponent } from "../ParticleComponent.js";
export class PA_Gravity extends ParticleComponent {
    constructor(particle, gravity = 9.8) {
        super(particle);
        this.gravity = gravity;
    }
    update(delta) {
        this.particle.velocity.y += this.gravity * (delta / 1000);
    }
    clone(particle) {
        let gr = new PA_Gravity(particle, this.gravity);
        return gr;
    }
}
