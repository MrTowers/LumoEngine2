import { Vector2 } from "../../../math/Vector2.js";
import { Particle } from "../Particle.js";
import { ParticleComponent } from "../ParticleComponent.js";

export class PA_RandomLocation extends ParticleComponent {
    min: Vector2;
    max: Vector2;
    constructor (particle: Particle, min = new Vector2(-1, -1), max = new Vector2(1, 1)) {
        super(particle);
        this.min = min;
        this.max = max;
    }

    init () {
        this.particle.transform.position = Vector2.randomInRange(this.min.x, this.max.x, this.min.y, this.max.y);
    }

    clone (particle: Particle) : PA_RandomLocation {
        let p = new PA_RandomLocation(particle);
        p.min = this.min.clone();
        p.max = this.max.clone();
        return p;
    }
}