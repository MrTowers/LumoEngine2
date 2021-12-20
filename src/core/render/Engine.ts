/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */

import { Input } from "../control/Input.js";
import { Logger } from "../debug/Logger.js";
import { AnimTrack } from "../objects/animation/AnimTrack.js";
import { GameObject } from "../objects/GameObject.js";
import { Scene } from "../objects/Scene.js";
import { Camera } from "./Camera.js";
import { Particle } from "./particleSystem/Particle.js";
import { PostprocessComponent } from "./postprocess/PostprocessComponent.js";

export class Engine {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    scene: Scene;
    scenes: any;
    particles: Particle[];
    textures: any;
    paused: boolean;
    sounds: any;
    camera: Camera;
    animations: AnimTrack[];
    logger: Logger;
    input: Input;
    timescale: number;
    version: string;
    timepassed: number;
    postprocessEffects: PostprocessComponent[] = [];

    constructor () {
        this.canvas = document.createElement("canvas");
        window.addEventListener("resize", (e) => {
            this.resize();
        });
        this.resize();
        document.body.appendChild(this.canvas);
        this.canvas.style.backgroundColor = "black";
        this.ctx = this.canvas.getContext("2d")!;
        this.ctx.imageSmoothingEnabled = false;
        this.scene = new Scene();
        this.scenes = {};
        this.textures = {};
        this.sounds = {};
        this.paused = false;
        document.addEventListener("contextmenu", (e) => {
            e.preventDefault();
        });
        this.camera = new Camera();
        this.particles = [];
        this.animations = [];
        this.logger = new Logger();
        this.input = new Input();
        this.timescale = 1;

        this.version = "0.24a";

        this.timepassed = 0;
    }

    render () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.scene.render(this.ctx, this.canvas);

        for (let i in this.particles) {
            this.particles[i].render(this.ctx, this.canvas);
        }
        this.logger.render(this.ctx);

        for (let i in this.postprocessEffects) {
            this.postprocessEffects[i].render(this.ctx, this.canvas);
        }
    }

    update (delta = 0) {
        if (!this.paused) {
            this.scene.update(delta);
            for (let i in this.particles) {
                this.particles[i].update(delta);
            }
            for (let i in this.animations) {
                this.animations[i].update(delta);
            }
            this.logger.update(delta);
            this.input.update();
            this.timepassed += delta / 1000;
        }
    }

    resize () {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    recalculateZ () {
        this.scene.objects.sort((a: GameObject, b: GameObject) : any => {
            return a.getZ() - b.getZ();
        });
    }
}