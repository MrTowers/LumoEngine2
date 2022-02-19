import { Vector2 } from "../../../math/Vector2.js";
import { Component } from "../../../objects/Component.js";
import { GameObject } from "../../../objects/GameObject.js";
import { LightSource } from "./Components/LightSource.js";
import { ShadingComponent } from "./ShadingComponent.js";

let SHADOWTILESIZE = 1

export class ShadingRendererScript extends Component {
    static modulators: LightSource[] = [];
    static shadowSource: GameObject[] = [];

    constructor () {
        super("shading renderer script");
    }

    render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
        for (let x = 0; x < canvas.width; x+=SHADOWTILESIZE) {
            for (let y = 0; y < canvas.height; y+=SHADOWTILESIZE) {
                ctx.save();
                ctx.fillStyle = "black";
                ctx.globalAlpha = this._calculateLight(new Vector2(x, y));
                ctx.fillRect(x, y, SHADOWTILESIZE, SHADOWTILESIZE);
                ctx.restore();
            }
        }
    }

    _calculateLight (v: Vector2) : number {
        let minDistance = 1000;
        for (let i in ShadingRendererScript.modulators) {
            let mod = ShadingRendererScript.modulators[i];
            minDistance = Math.min(minDistance, mod.position.distance(v));
        }

        return minDistance / 1000;
    }

    addShadowSource (gameObject: GameObject) {
        ShadingRendererScript.shadowSource.push(gameObject);
    }
}

export class ShadingRenderer extends GameObject {
    constructor (shadowQuality = 1) {
        super("shading renderer");
        SHADOWTILESIZE = 32 / shadowQuality;
        this.addComponent(new ShadingRendererScript());
    }
}