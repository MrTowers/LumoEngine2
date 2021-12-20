import { rand } from "../../../functions/math/rand.js";
import { Vector2 } from "../../../math/Vector2.js";
import { ParticleComponent } from "../ParticleComponent.js";
export class PA_Orbit extends ParticleComponent {
    constructor(particle, speed = 20, power = 20) {
        super(particle);
        this.speed = speed;
        this.power = power;
        this.time = 0;
    }
    update(delta) {
        this.time += rand(0, 5);
        this.particle.velocity = this.particle.velocity.add(new Vector2(Math.sin(this.time * this.speed) * this.power, Math.cos(this.time * this.speed) * this.power));
    }
    clone(particle) {
        let p = new PA_Orbit(particle);
        p.power = this.power;
        p.speed = this.speed;
        return p;
    }
}
