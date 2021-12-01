/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */
import { Vector2 } from "../math/Vector2.js";
export class Camera {
    constructor() {
        this.position = new Vector2();
        this.offset = new Vector2();
    }
    getCalculatedPosition() {
        return new Vector2(this.position.x + this.offset.x, this.position.y + this.offset.y);
    }
}
