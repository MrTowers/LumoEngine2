export class ParticleComponent {
    constructor(particle) {
        this.particle = particle;
    }
    update(delta) {
    }
    clone(particle) {
        let p = new ParticleComponent(particle);
        return p;
    }
}
