import { Vector2 } from "../../core/math/Vector2.js";
import { Component } from "../../core/objects/Component.js";
import { RIM_WORLD } from "../../RimWorld.js";
export class AIController extends Component {
    constructor() {
        super();
        this.targetPosition = new Vector2();
        this.state = "waiting";
        this.wait = 500;
        this.state = "waiting";
    }
    moveTo(location = new Vector2()) {
        this.targetPosition = location;
        this.state = "moving";
    }
    reachedDestination() {
        this.state = "waiting";
    }
    update(delta = 0) {
        this.wait -= delta;
        if (this.wait <= 0) {
            this.moveTo(Vector2.randomInRange(0, RIM_WORLD.canvas.width, 0, RIM_WORLD.canvas.height));
            this.wait = 2000;
        }
        if (this.state == "moving") {
            this.gameObject.setPosition(this.gameObject.getPosition().add(Vector2.clamp(this.targetPosition.sub(this.gameObject.getPosition()), -5, 5)));
        }
        if (Vector2.equal(this.gameObject.getPosition(), this.targetPosition)) {
            this.reachedDestination();
        }
    }
}
