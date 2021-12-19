/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */
import { LUMO_ENGINE2 } from "../../LumoEngine2.js";
import { Vector2 } from "../math/Vector2.js";
import { Component } from "../objects/Component.js";
import { Camera } from "./Camera.js";
export class Tilemap extends Component {
    constructor(image) {
        super();
        this.image = LUMO_ENGINE2.textures[image];
        this.sizeX = 20;
        this.sizeY = 20;
        this.display = 0;
        this.oneTileSize = 16;
        this.alpha = 1;
        this.offset = new Vector2();
    }
    render(ctx, canvas) {
        if (this.image.width > 0 && this.image.height > 0) {
            let pos = this.gameObject.getPosition();
            let cam = Camera.getPosition();
            let zoom = Camera.getZoom();
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.drawImage(this.image, this.display * this.oneTileSize, 0, this.oneTileSize, this.oneTileSize, (pos.x / zoom) - cam.x + (canvas.width / 2) - ((this.sizeX / zoom) / 2) + this.offset.x, (pos.y / zoom) - cam.y + (canvas.height / 2) - ((this.sizeY / zoom) / 2) + this.offset.y, this.sizeX / zoom, this.sizeY / zoom);
            ctx.restore();
        }
    }
}
