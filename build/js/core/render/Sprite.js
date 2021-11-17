/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */
import { LUMO_ENGINE2 } from "../../LumoEngine2.js";
import { Component } from "../objects/Component.js";
export class Sprite extends Component {
    constructor(imageSrc = "") {
        super();
        this.image = LUMO_ENGINE2.textures[imageSrc];
        this.sizeX = 20;
        this.sizeY = 20;
        this.alpha = 1;
        this.light = 0;
    }
    render(ctx, canvas) {
        if (this.image.width > 0 && this.image.height > 0) {
            let pos = this.gameObject.getPosition();
            let cam = LUMO_ENGINE2.camera.getCalculatedPosition();
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.drawImage(this.image, pos.x - cam.x + (canvas.width / 2) - (this.sizeX / 2), pos.y - cam.y + (canvas.height / 2) - (this.sizeY / 2), this.sizeX, this.sizeY);
            if (this.light > 0) {
                ctx.globalAlpha = this.light;
                ctx.drawImage(LUMO_ENGINE2.textures["LUMO_light"], pos.x - cam.x + (canvas.width / 2) - (this.sizeX), pos.y - cam.y + (canvas.height / 2) - (this.sizeY), this.sizeX * 2, this.sizeY * 2);
            }
            ctx.restore();
        }
    }
}
