import { Vector2 } from "../core/math/Vector2.js";
import { Component } from "../core/objects/Component.js";
export class PlayerController extends Component {
    constructor() {
        super();
        this.speedY = 0;
        this.gravity = 9.8;
        this.physics = true;
    }
    start() {
        this.gameObject.setPosition(new Vector2(0, -100));
    }
    update(delta) {
        if (this.physics) {
            this.gameObject.setPosition(this.gameObject.getPosition().add(new Vector2(0, this.speedY * (delta / 1000))));
            this.speedY += this.gravity;
            console.log(this.gameObject.getPosition());
            if (this.gameObject.getPosition().y > 0) {
                this.speedY *= -0.7;
                if (Math.abs(this.speedY) < 50) {
                    this.speedY = 0;
                    this.physics = false;
                }
                this.gameObject.setPosition(new Vector2());
            }
        }
    }
}
