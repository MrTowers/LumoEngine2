import { LUMO_ENGINE2 } from "../../../LumoEngine2.js";
import { Transform } from "../../math/Transform.js";
import { Vector2 } from "../../math/Vector2.js";
import { ParticleComponent } from "./ParticleComponent.js";

export class Particle {
    components: ParticleComponent[];
    transform: Transform;
    velocity: Vector2;
    imageName: string;
    image: HTMLImageElement;
    startlife: number;
    life: number;
    alpha: number;
    constructor(imageName = "", life = 1) {
        this.components = [];
        this.transform = new Transform();
        this.velocity = new Vector2();
        this.imageName = imageName;
        this.image = LUMO_ENGINE2.textures[imageName];
        this.startlife = life;
        this.life = life;
        this.alpha = 1;
    }

    update (delta: number) {
        for (let i in this.components) {
            this.components[i].update(delta);
        }

        this.life -= delta / 1000;
        if (this.life <= 0) {
            this.destroy();
        }

        this.transform.position = this.transform.position.add(this.velocity);
    }

    render (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        let x = this.transform.position.x + canvas.width / 2 - LUMO_ENGINE2.camera.position.x - this.image.width * this.transform.scale.x / 2;
        let y = this.transform.position.y + canvas.height / 2 - LUMO_ENGINE2.camera.position.y - this.image.height * this.transform.scale.y / 2;
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.drawImage(this.image, x, y, this.transform.scale.x * this.image.width, this.transform.scale.y * this.image.height);
        ctx.restore();
    }

    spawn (position: Vector2) {
        this.transform.position = position;
        LUMO_ENGINE2.particles.push(this);
    }

    destroy () {
        LUMO_ENGINE2.particles.splice(LUMO_ENGINE2.particles.indexOf(this), 1);
    }

    addComponent (component: ParticleComponent) {
        this.components.push(component);
    }

    clone () : Particle {
        let p = new Particle(this.imageName, this.startlife);
        p.velocity = this.velocity.clone();
        p.alpha = this.alpha;
        p.transform = this.transform.clone();
        for (let i in this.components) {
            p.components.push(this.components[i].clone(p));
        }

        return p;
    }
}