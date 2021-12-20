import { Color } from "../../math/Color.js";
import { Vector2 } from "../../math/Vector2.js";
import { Component } from "../../objects/Component.js";

export class ProgressBar extends Component {
    value: number = 0;
    position: Vector2 = new Vector2();
    size: Vector2 = new Vector2();
    color: Color;
    constructor (color: Color) {
        super("progress bar");
        this.color = color;
    }

    render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
        ctx.save();
        ctx.fillStyle = this.color.toString();
        ctx.fillRect(this.position.x + (canvas.width / 2) - (this.size.x / 2), this.position.y + (canvas.height / 2) - (this.size.y / 2), this.size.x * this.value, this.size.y);
        ctx.restore();
    }
}