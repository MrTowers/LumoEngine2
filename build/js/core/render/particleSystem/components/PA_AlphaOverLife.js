import { ParticleComponent } from "../ParticleComponent.js";
export class PA_AlphaOverLife extends ParticleComponent {
    constructor(particle) {
        super(particle);
    }
    update() {
        this.particle.alpha = this.particle.life / this.particle.startlife;
    }
    clone(particle) {
        return new PA_AlphaOverLife(particle);
    }
    init() {
    }
}
