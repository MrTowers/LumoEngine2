import { Vector2 } from "../../../math/Vector2.js";
import { ParticleComponent } from "../ParticleComponent.js";
export class PA_InitialVelocity extends ParticleComponent {
    constructor(particle, min = new Vector2(-1, -1), max = new Vector2(1, 1)) {
        super(particle);
        this.min = min;
        this.max = max;
    }
    init() {
        this.particle.velocity = Vector2.randomInRange(this.min.x, this.max.x, this.min.y, this.max.y);
    }
    clone(particle) {
        return new PA_InitialVelocity(particle, this.min.clone(), this.max.clone());
    }
}
