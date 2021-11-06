import { Component } from "../objects/Component.js";
import { GameObject } from "../objects/GameObject.js";

export class Sprite extends Component {
    image: HTMLImageElement;

    constructor (image = new Image()) {
        super();
        this.image = image;
    }

    render () {
        if (this.image.width > 0 && this.image.height > 0) {
            
        }
    }
}