import { Vector2 } from "../../../math/Vector2.js";
import { AnimKey } from "../../../objects/animation/AnimKey.js";
import { AnimTrack } from "../../../objects/animation/AnimTrack.js";
import { Particle } from "../Particle.js";
import { ParticleComponent } from "../ParticleComponent.js";

export class PA_SizeOverLife extends ParticleComponent {
    animation: AnimTrack;
    beginSize: Vector2;
    constructor (particle: Particle) {
        super(particle);
        this.animation = new AnimTrack([
            new AnimKey(0, 0),
            new AnimKey(0.5, 1),
            new AnimKey(1, 0)
        ]);

        this.beginSize = particle.transform.scale;
    }

    update () {
        this.animation.setTime(this.particle.life / this.particle.startlife);
        this.particle.transform.scale = new Vector2(this.animation.value * this.beginSize.x, this.animation.value * this.beginSize.y);
        if (isNaN(this.particle.alpha)) {
            this.particle.transform.scale = this.beginSize.clone();
        }
    }

    clone (particle: Particle) {
        return new PA_SizeOverLife(particle);
    }

    init() {
        this.animation.setTime(this.particle.life / this.particle.startlife);
        this.particle.alpha = 0;
    }
}