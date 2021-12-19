/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */

import { LUMO_ENGINE2 } from "../../LumoEngine2.js";
import { Vector2 } from "../math/Vector2.js";

export class Camera {
    position: Vector2;
    offset: Vector2;
    zoom: number;

    constructor () {
        this.position = new Vector2();
        this.offset = new Vector2();
        this.zoom = 1;
    }

    getCalculatedPosition () : Vector2{
        return new Vector2(this.position.x + this.offset.x, this.position.y + this.offset.y);
    }

    static setPosition (position: Vector2) {
        LUMO_ENGINE2.camera.position = position;
    }

    static addPosition (position: Vector2) {
        LUMO_ENGINE2.camera.position = LUMO_ENGINE2.camera.position.add(position);
    }

    static getPosition () : Vector2 {
        return LUMO_ENGINE2.camera.getCalculatedPosition();
    }

    static getZoom () : number {
        return LUMO_ENGINE2.camera.zoom;
    }

    static setZoom (value: number) {
        LUMO_ENGINE2.camera.zoom = value;
    }
}