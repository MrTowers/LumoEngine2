import { Vector2 } from "../../core/math/Vector2.js";
import { Component } from "../../core/objects/Component.js";
export class AIController extends Component {
    constructor() {
        super();
        this.targetPosition = new Vector2();
        this.state = "waiting";
        this.wait = 500;
        this.state = "waiting";
        this.walkSpeed = 2;
        this.tag = "ai";
    }
    moveTo(location = new Vector2()) {
        this.targetPosition = location;
        this.state = "moving";
    }
    reachedDestination() {
        this.state = "waiting";
    }
    update(delta = 0) {
        if (this.state == "moving") {
            this.gameObject.setPosition(this.gameObject.getPosition().add(Vector2.clamp(this.targetPosition.sub(this.gameObject.getPosition()), -this.walkSpeed, this.walkSpeed)));
        }
        if (Vector2.equal(this.gameObject.getPosition(), this.targetPosition)) {
            this.reachedDestination();
        }
    }
}
