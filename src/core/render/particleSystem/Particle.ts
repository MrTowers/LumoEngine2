/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */

import { LUMO_ENGINE2 } from "../../../LumoEngine2.js";
import { Transform } from "../../math/Transform.js";
import { Vector2 } from "../../math/Vector2.js";
import { Camera } from "../Camera.js";
import { ParticleComponent } from "./ParticleComponent.js";

type _paSpriteType = "sprite" | "tilemap";

export class Particle {
    components: ParticleComponent[];
    transform: Transform;
    velocity: Vector2;
    imageName: string;
    image: HTMLImageElement;
    startlife: number;
    life: number;
    alpha: number;
    spriteType: _paSpriteType;
    tilemapAnimSpeed: number = 0;
    display: number;
    oneTileSize: Vector2;
    amountOfSprites: number;

    constructor(imageName = "", life = 1, type: _paSpriteType = "sprite", oneTileSize: Vector2 = new Vector2(16, 16)) {
        this.components = [];
        this.transform = new Transform();
        this.velocity = new Vector2();
        this.imageName = imageName;
        this.image = LUMO_ENGINE2.textures[imageName];
        this.startlife = life;
        this.life = life;
        this.alpha = 1;
        this.spriteType = type;
        this.display = 0;
        this.oneTileSize = oneTileSize;
        this.amountOfSprites = Math.floor(this.image.width / this.oneTileSize.x);
    }

    update(delta: number) {
        for (let i in this.components) {
            this.components[i].update(delta);
        }

        this.life -= delta / 1000;
        if (this.life <= 0) {
            this.destroy();
        }

        this.transform.position = this.transform.position.add(this.velocity);

        this.display += (delta / 1000) * this.tilemapAnimSpeed;
        if (this.display >= this.amountOfSprites) {
            this.display = 0;
        }
    }

    render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        let x = this.transform.position.x + canvas.width / 2 - LUMO_ENGINE2.camera.position.x - LUMO_ENGINE2.camera.offset.x - this.image.width * this.transform.scale.x / 2;
        let y = this.transform.position.y + canvas.height / 2 - LUMO_ENGINE2.camera.position.y - LUMO_ENGINE2.camera.offset.y - this.image.height * this.transform.scale.y / 2;
        let xt = this.transform.position.x + canvas.width / 2 - LUMO_ENGINE2.camera.position.x - LUMO_ENGINE2.camera.offset.x - (this.image.width / this.amountOfSprites) * this.transform.scale.x / 2;
        let yt = this.transform.position.y + canvas.height / 2 - LUMO_ENGINE2.camera.position.y - LUMO_ENGINE2.camera.offset.y - (this.image.height / this.amountOfSprites) * this.transform.scale.y / 2;
        if (x > 0 && x < canvas.width && y > 0 && y < canvas.height) {
            if (this.spriteType == "sprite") {
                ctx.save();
                ctx.globalAlpha = this.alpha;
                ctx.drawImage(this.image, x, y, this.transform.scale.x * this.image.width, this.transform.scale.y * this.image.height);
                ctx.restore();
            }
            if (this.spriteType == "tilemap") {
                ctx.save();
                ctx.globalAlpha = this.alpha;
                ctx.drawImage(
                    this.image,
                    Math.floor(this.display) * this.oneTileSize.x,
                    0,
                    this.oneTileSize.x,
                    this.oneTileSize.y,
                    xt,
                    yt,
                    this.oneTileSize.x * this.transform.scale.x,
                    this.oneTileSize.y * this.transform.scale.y
                );
                ctx.restore();
            }
        }
    }

    spawn(position: Vector2) {
        this.transform.position = position;
        LUMO_ENGINE2.particles.push(this);
    }

    destroy() {
        LUMO_ENGINE2.particles.splice(LUMO_ENGINE2.particles.indexOf(this), 1);
    }

    addComponent(component: ParticleComponent) {
        this.components.push(component);
    }

    clone(): Particle {
        let p = new Particle(this.imageName, this.startlife, this.spriteType, this.oneTileSize);
        p.velocity = this.velocity.clone();
        p.alpha = this.alpha;
        p.transform = this.transform.clone();
        p.tilemapAnimSpeed = this.tilemapAnimSpeed;
        p.display = this.display;
        p.oneTileSize = this.oneTileSize;
        for (let i in this.components) {
            let c = this.components[i].clone(p);
            p.components.push(c);
        }

        return p;
    }

    init() {
        for (let i in this.components) {
            this.components[i].init();
        }
    }
}