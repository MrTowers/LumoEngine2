import { Input } from "../core/control/Input.js";
import { Vector2 } from "../core/math/Vector2.js";
import { Component } from "../core/objects/Component.js";
export class PostacScript extends Component {
    constructor() {
        super();
        this.movementx = 0;
        this.movementy = 0;
        this.moveSpeed = 1;
    }
    update(delta) {
        this.movementx = 0;
        this.movementy = 0;
        if (Input.getKey("w")) {
            this.movementy += -this.moveSpeed;
        }
        if (Input.getKey("s")) {
            this.movementy += this.moveSpeed;
        }
        if (Input.getKey("a")) {
            this.movementx += -this.moveSpeed;
        }
        if (Input.getKey("d")) {
            this.movementx += this.moveSpeed;
        }
        this.gameObject.addPosition(new Vector2(this.movementx, this.movementy).normalize().mulByNumber(delta));
    }
}
