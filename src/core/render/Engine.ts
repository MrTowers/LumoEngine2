/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */

import { Load } from "../Load.js";
import { GameObject } from "../objects/GameObject.js";
import { Scene } from "../objects/Scene.js";
import { Camera } from "./Camera.js";

export class Engine {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    scene: Scene;
    scenes: any;
    textures: any;
    paused: boolean;
    sounds: any;
    camera: Camera;

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
    }

    render () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.scene.render(this.ctx, this.canvas);
    }

    update (delta = 0) {
        if (!this.paused) {
            this.scene.update(delta);
        }
    }

    resize () {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
}