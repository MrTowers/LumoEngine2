/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */

import { LUMO_ENGINE2 } from "../../LumoEngine2.js";
import { GameObject } from "./GameObject.js";

export class Scene {
    objects: GameObject[];

    constructor () {
        this.objects = [];
    }

    spawnGameObject (gameObject: GameObject) {
        this.objects.push(gameObject);
        LUMO_ENGINE2.recalculateZ();
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