/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */

import { LUMO_ENGINE2 } from "../../LumoEngine2.js";
import { Component } from "../objects/Component.js";

export class Sprite extends Component {
    image: HTMLImageElement;
    sizeX: number;
    sizeY: number;
    alpha: number;

    constructor (image = new Image()) {
        super();
        this.image = image;
        this.sizeX = 20;
        this.sizeY = 20;
        this.alpha = 1;
    }

    render (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        if (this.image.width > 0 && this.image.height > 0) {
            let pos = this.gameObject.getPosition();
            let cam = LUMO_ENGINE2.camera.getCalculatedPosition();
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.drawImage(this.image, pos.x - cam.x + (canvas.width / 2) - (this.sizeX / 2), pos.y - cam.y + (canvas.height / 2) - (this.sizeY / 2), this.sizeX, this.sizeY);
            ctx.restore();
        }
    }
}