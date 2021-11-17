import { GameObject } from "./GameObject.js";

export class Scene {
    objects: GameObject[];

    constructor () {
        this.objects = [];
    }

    spawnGameObject (gameObject: GameObject) {
        this.objects.push(gameObject);
        gameObject.start();
    }

    update (delta = 0) {
        for (let i in this.objects) {
            this.objects[i].update(delta);
        }
    }

    render (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        for (let i in this.objects) {
            this.objects[i].render(ctx, canvas);
        }
    }
}