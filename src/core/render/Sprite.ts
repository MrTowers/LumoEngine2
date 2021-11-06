import { Component } from "../objects/Component.js";

export class Sprite extends Component {
    image: HTMLImageElement;
    sizeX: number;
    sizeY: number;

    constructor (image = new Image()) {
        super();
        this.image = image;
        this.sizeX = 20;
        this.sizeY = 20;
    }

    render (ctx: CanvasRenderingContext2D) {
        if (this.image.width > 0 && this.image.height > 0) {
            let pos = this.gameObject.getPosition();
            ctx.drawImage(this.image, pos.x, pos.y, this.sizeX, this.sizeY);
        }
    }
}