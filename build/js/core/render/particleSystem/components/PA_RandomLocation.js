import { Vector2 } from "../../../math/Vector2.js";
import { ParticleComponent } from "../ParticleComponent.js";
export class PA_RandomLocation extends ParticleComponent {
    constructor(particle, min = new Vector2(-1, -1), max = new Vector2(1, 1)) {
        super(particle);
        this.min = min;
        this.max = max;
    }
    init() {
        this.particle.transform.position = Vector2.randomInRange(this.min.x, this.max.x, this.min.y, this.max.y);
    }
    clone(particle) {
        let p = new PA_RandomLocation(particle);
        p.min = this.min.clone();
        p.max = this.max.clone();
        return p;
    }
}
