/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */
import { Color } from "../math/Color.js";
import { Component } from "../objects/Component.js";
import { Camera } from "./Camera.js";
export class Box extends Component {
    constructor(sizeX = 0, sizeY = 0, color = new Color()) {
        super();
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.color = color;
        this.tag = "box";
    }
    render(ctx, canvas) {
        let cam = Camera.getPosition();
        let zoom = Camera.getZoom();
        ctx.save();
        ctx.fillStyle = this.color.toString();
        ctx.fillRect(this.gameObject.getPosition().x + (canvas.width / 2) - ((this.sizeX / zoom) / 2) - cam.x, this.gameObject.getPosition().y + (canvas.height / 2) - ((this.sizeY / zoom) / 2) - cam.y, this.sizeX / zoom, this.sizeY / zoom);
        ctx.restore();
    }
}
