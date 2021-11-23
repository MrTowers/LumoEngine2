export class ParticleEmitter {
    constructor(particle, particleSystem, delay = 0.25, amount = 1) {
        this.particle = particle;
        this.playing = false;
        this.startDelay = delay;
        this.delay = delay;
        this.amount = amount;
        this.particleSystem = particleSystem;
        this.components = [];
    }
    update(delta) {
        if (this.playing) {
            this.delay -= delta / 1000;
            if (this.delay <= 0) {
                this.burst();
                this.delay = this.startDelay;
            }
        }
    }
    burst() {
        for (let i = 0; i < this.amount; i++) {
            let p = this.particle.clone();
            p.spawn(this.particleSystem.gameObject.getPosition());
        }
    }
    play() {
        this.delay = this.startDelay;
        this.playing = true;
    }
    stop() {
        this.playing = false;
    }
}
