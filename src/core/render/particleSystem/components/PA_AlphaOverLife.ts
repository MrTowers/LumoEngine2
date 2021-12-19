import { AnimKey } from "../../../objects/animation/AnimKey.js";
import { AnimTrack } from "../../../objects/animation/AnimTrack.js";
import { Particle } from "../Particle.js";
import { ParticleComponent } from "../ParticleComponent.js";

export class PA_AlphaOverLife extends ParticleComponent {
    animation: AnimTrack;
    constructor (particle: Particle) {
        super(particle);
        this.animation = new AnimTrack([
            new AnimKey(0, 0),
            new AnimKey(0.5, 1),
            new AnimKey(1, 0)
        ]);
    }

    update () {
        this.animation.setTime(this.particle.life / this.particle.startlife);
        this.particle.alpha = this.animation.value;
    }

    clone (particle: Particle) {
        return new PA_AlphaOverLife(particle);
    }

    init() {
        this.animation.setTime(this.particle.life / this.particle.startlife);
        this.particle.alpha = this.animation.value;
    }
}