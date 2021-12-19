/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */
import { LUMO_ENGINE2 } from "../../LumoEngine2.js";
import { LUMO_settings } from "../LUMO_settings.js";
import { Vector2 } from "../math/Vector2.js";
import { Component } from "../objects/Component.js";
import { Camera } from "./Camera.js";
export class Sprite extends Component {
    constructor(imageName = "") {
        super();
        this.image = LUMO_ENGINE2.textures[imageName];
        this.sizeX = 20;
        this.sizeY = 20;
        this.alpha = 1;
        this.light = 0;
        this.offset = new Vector2();
    }
    render(ctx, canvas) {
        if (this.image.width > 0 && this.image.height > 0) {
            let pos = this.gameObject.getPosition();
            let cam = LUMO_ENGINE2.camera.getCalculatedPosition();
            let zoom = Camera.getZoom();
            ctx.save();
            if (LUMO_settings.spriteShadows) {
                ctx.shadowBlur = LUMO_settings.shadowSettings.blur;
                ctx.shadowColor = LUMO_settings.shadowSettings.color;
                ctx.shadowOffsetX = 10;
            }
            ctx.globalAlpha = this.alpha;
            ctx.drawImage(this.image, (pos.x / zoom) - cam.x + this.offset.x - ((this.sizeX / zoom) / 2) + (canvas.width / 2), (pos.y / zoom) - cam.y - ((this.sizeY / zoom) / 2) + this.offset.y + (canvas.height / 2), this.sizeX / zoom, this.sizeY / zoom);
            if (this.light > 0) {
                ctx.globalAlpha = this.light;
                ctx.drawImage(LUMO_ENGINE2.textures["LUMO_light"], pos.x - cam.x + (canvas.width / 2) - (this.sizeX), pos.y - cam.y + (canvas.height / 2) - (this.sizeY), this.sizeX * 2, this.sizeY * 2);
            }
            ctx.restore();
        }
    }
    setSize(value) {
        this.sizeX = value;
        this.sizeY = value;
    }
}
