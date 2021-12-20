/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */
import { LUMO_ENGINE2 } from "../../LumoEngine2.js";
import { Vector2 } from "../math/Vector2.js";
export class Camera {
    constructor() {
        this.position = new Vector2();
        this.offset = new Vector2();
        this.zoom = 1;
    }
    getCalculatedPosition() {
        return new Vector2(this.position.x + this.offset.x, this.position.y + this.offset.y);
    }
    static setPosition(position) {
        LUMO_ENGINE2.camera.position = position;
    }
    static addPosition(position) {
        LUMO_ENGINE2.camera.position = LUMO_ENGINE2.camera.position.add(position);
    }
    static getPosition() {
        return LUMO_ENGINE2.camera.getCalculatedPosition();
    }
    static getZoom() {
        return LUMO_ENGINE2.camera.zoom;
    }
    static setZoom(value) {
        LUMO_ENGINE2.camera.zoom = value;
    }
}
