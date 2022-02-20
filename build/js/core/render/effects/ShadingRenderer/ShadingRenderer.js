import { Vector2 } from "../../../math/Vector2.js";
import { Component } from "../../../objects/Component.js";
import { GameObject } from "../../../objects/GameObject.js";
let SHADOWTILESIZE = 1;
export class ShadingRendererScript extends Component {
    constructor() {
        super("shading renderer script");
    }
    render(ctx, canvas) {
        for (let x = 0; x < canvas.width; x += SHADOWTILESIZE) {
            for (let y = 0; y < canvas.height; y += SHADOWTILESIZE) {
                ctx.save();
                ctx.fillStyle = "black";
                ctx.filter = `brightness(${this._calculateLight(new Vector2(x, y))})`;
                ctx.fillRect(x, y, SHADOWTILESIZE, SHADOWTILESIZE);
                ctx.restore();
            }
        }
    }
    _calculateLight(v) {
        let minDistance = 1000;
        for (let i in ShadingRendererScript.modulators) {
            let mod = ShadingRendererScript.modulators[i];
            minDistance = Math.min(minDistance, mod.position.distance(v));
        }
        return minDistance / 1000;
    }
    addShadowSource(gameObject) {
        ShadingRendererScript.shadowSource.push(gameObject);
    }
}
ShadingRendererScript.modulators = [];
ShadingRendererScript.shadowSource = [];
export class ShadingRenderer extends GameObject {
    constructor(shadowQuality = 1) {
        super("shading renderer");
        SHADOWTILESIZE = 32 / shadowQuality;
        this.addComponent(new ShadingRendererScript());
    }
}
