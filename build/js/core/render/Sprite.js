import { Component } from "../objects/Component.js";
export class Sprite extends Component {
    constructor(image = new Image()) {
        super();
        this.image = image;
    }
    render() {
        if (this.image.width > 0 && this.image.height > 0) {
        }
    }
}
