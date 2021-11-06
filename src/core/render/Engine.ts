import { GameObject } from "../objects/GameObject.js";

export class Engine {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    objects: GameObject[];

    constructor () {
        this.canvas = document.createElement("canvas");
        this.canvas.width = 1000;
        this.canvas.height = 700;
        document.body.appendChild(this.canvas);
        this.canvas.style.backgroundColor = "black";
        this.ctx = this.canvas.getContext("2d")!;
        this.objects = [];
    }

    render () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i in this.objects) {
            this.objects[i].render(this.ctx, this.canvas);
        }
    }

    update (delta = 0) {
        for (let i in this.objects) {
            this.objects[i].update(delta);
        }
    }
}