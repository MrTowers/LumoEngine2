import { AnimKey } from "../../../objects/animation/AnimKey.js";
import { AnimTrack } from "../../../objects/animation/AnimTrack.js";
import { Particle } from "../Particle.js";
import { ParticleComponent } from "../ParticleComponent.js";

export class PA_AlphaOverLife extends ParticleComponent {
    constructor (particle: Particle) {
        super(particle);
    }

    update () {
        this.particle.alpha = this.particle.life / this.particle.startlife;
    }

    clone (particle: Particle) {
        return new PA_AlphaOverLife(particle);
    }

    init() {

    }
}