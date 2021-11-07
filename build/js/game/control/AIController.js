import { Vector2 } from "../../core/math/Vector2.js";
import { Component } from "../../core/objects/Component.js";
export class AIController extends Component {
    constructor() {
        super();
        this.targetLocation = new Vector2();
        this.state = "idle";
    }
}
