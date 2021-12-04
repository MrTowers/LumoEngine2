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
    }
    getCalculatedPosition() {
        return new Vector2(this.position.x + this.offset.x, this.position.y + this.offset.y);
    }
    static setPosition(location) {
        LUMO_ENGINE2.camera.position = location;
    }
    static getPosition(reference = false) {
        if (reference) {
            return LUMO_ENGINE2.camera.position;
        }
        else {
            return LUMO_ENGINE2.camera.position.clone();
        }
    }
    static addPosition(v) {
        LUMO_ENGINE2.camera.position = LUMO_ENGINE2.camera.position.add(v);
    }
}
