import { Vector2 } from "../../../math/Vector2.js";
import { Particle } from "../Particle.js";
import { ParticleComponent } from "../ParticleComponent.js";

export class PA_InitialVelocity extends ParticleComponent {
    min: Vector2;
    max: Vector2;

    constructor (particle: Particle, min = new Vector2(-1, -1), max = new Vector2(1, 1)) {
        super(particle);
        this.min = min;
        this.max = max;
    }

    init () {
        this.particle.velocity = Vector2.randomInRange(this.min.x, this.max.x, this.min.y, this.max.y);
    }

    clone (particle: Particle) : PA_InitialVelocity {
        return new PA_InitialVelocity(particle, this.min.clone(), this.max.clone());
    }
}