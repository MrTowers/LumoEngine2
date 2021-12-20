import { PostprocessComponent } from "../PostprocessComponent.js";
export class PP_Vignette extends PostprocessComponent {
    constructor() {
        super();
        this.strength = 1;
        this.image = new Image();
        this.image.src = "../src/core/assets/vignette.png";
    }
    render(ctx, canvas) {
        ctx.save();
        ctx.globalAlpha = this.strength;
        ctx.drawImage(this.image, 0, 0, canvas.width, canvas.height);
        ctx.restore();
    }
}
