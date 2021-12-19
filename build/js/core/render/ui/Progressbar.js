import { Vector2 } from "../../math/Vector2.js";
import { Component } from "../../objects/Component.js";
export class ProgressBar extends Component {
    constructor(color) {
        super("progress bar");
        this.value = 0;
        this.position = new Vector2();
        this.size = new Vector2();
        this.color = color;
    }
    render(ctx, canvas) {
        ctx.save();
        ctx.fillStyle = this.color.toString();
        ctx.fillRect(this.position.x + (canvas.width / 2) - (this.size.x / 2), this.position.y + (canvas.height / 2) - (this.size.y / 2), this.size.x * this.value, this.size.y);
        ctx.restore();
    }
}
