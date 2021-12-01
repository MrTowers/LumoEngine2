/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */
import { LUMO_ENGINE2 } from "../../LumoEngine2.js";
import { Vector2 } from "../math/Vector2.js";
export function screenToWorldLocation(location) {
    let cam = LUMO_ENGINE2.camera.position;
    let canvas = LUMO_ENGINE2.canvas;
    let x = location.x + cam.x - (canvas.width / 2);
    let y = location.y + cam.y - (canvas.height / 2);
    return new Vector2(x, y);
}
