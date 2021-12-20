import { screenToWorldLocation } from "../functions/screenToWorldLocation.js";
import { Color } from "../math/Color.js";
import { Vector2 } from "../math/Vector2.js";
import { Component } from "../objects/Component.js";
import { Camera } from "./Camera.js";

export class TextRenderer extends Component {
    text: string;
    color: Color;
    offset: Vector2;
    constructor (text = "") {
        super("text renderer");
        this.text = text;
        this.color = new Color(1, 1, 1, 1);
        this.offset = new Vector2();
    }

    setValue (text = "") {
        this.text = text;
    }

    render (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        ctx.save();
        let pos = this.gameObject.getPosition();
        let cam = Camera.getPosition();
        let zoom = Camera.getZoom();
        ctx.fillStyle = this.color.toString();
        ctx.fillText(this.text, (pos.x / zoom) + (canvas.width / 2) - cam.x + this.offset.x, (pos.y / zoom) + (canvas.height / 2) - cam.y + this.offset.y);
        ctx.restore();
    }
}