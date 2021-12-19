/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */

import { LUMO_ENGINE2 } from "../../LumoEngine2.js";
import { Vector2 } from "../math/Vector2.js";
import { Camera } from "../render/Camera.js";

export function screenToWorldLocation (location: Vector2) : Vector2 {
    let cam = Camera.getPosition();
    let canvas = LUMO_ENGINE2.canvas;
    let zoom = Camera.getZoom();
    let x = location.x + cam.x - (canvas.width / 2);
    let y = location.y + cam.y - (canvas.height / 2);
    x = x * zoom;
    y = y * zoom;

    return new Vector2(x, y);
}