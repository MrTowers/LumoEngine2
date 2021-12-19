/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */
import { LUMO_ENGINE2 } from "../../LumoEngine2.js";
export class Scene {
    constructor() {
        this.objects = [];
    }
    spawnGameObject(gameObject) {
        this.objects.push(gameObject);
        LUMO_ENGINE2.recalculateZ();
        gameObject.start();
    }
    update(delta = 0) {
        for (let i in this.objects) {
            this.objects[i].update(delta);
        }
    }
    render(ctx, canvas) {
        for (let i in this.objects) {
            this.objects[i].render(ctx, canvas);
        }
    }
}
