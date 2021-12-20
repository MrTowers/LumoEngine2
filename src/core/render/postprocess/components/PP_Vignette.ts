import { PostprocessComponent } from "../PostprocessComponent.js";

export class PP_Vignette extends PostprocessComponent {
    image: HTMLImageElement;
    strength: number = 1;
    constructor () {
        super();
        this.image = new Image();
        this.image.src = "../src/assets/vignette.png";
    }

    render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
        ctx.save();
        ctx.globalAlpha = this.strength;
        ctx.drawImage(this.image, 0, 0, canvas.width, canvas.height);
        ctx.restore();
    }
}