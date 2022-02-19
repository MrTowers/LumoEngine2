import { Component } from "../../objects/Component.js";
import { GameObject } from "../../objects/GameObject.js";
let SHADOWTILESIZE = 1;
class ShadingRendererScript extends Component {
    constructor() {
        super("shading renderer script");
    }
    render(ctx, canvas) {
        for (let x = 0; x < canvas.width; x += SHADOWTILESIZE) {
            for (let y = 0; y < canvas.height; y += SHADOWTILESIZE) {
                ctx.save();
                ctx.fillStyle = "black";
                ctx.globalAlpha = 0;
                ctx.fillRect(x, y, SHADOWTILESIZE, SHADOWTILESIZE);
                ctx.restore();
            }
        }
    }
}
export class ShadingRenderer extends GameObject {
    constructor(shadowQuality = 1) {
        super("shading renderer");
        SHADOWTILESIZE = 32 / shadowQuality;
        this.addComponent(new ShadingRendererScript());
    }
}
