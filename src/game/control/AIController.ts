import { Vector2 } from "../../core/math/Vector2.js";
import { Component } from "../../core/objects/Component.js";

type _state =
"walking"|
"idle"|
"eating"|
"scared"|
"working";

export class AIController extends Component {
    targetLocation: Vector2;
    state: _state;

    constructor () {
        super();
        this.targetLocation = new Vector2();
        this.state = "idle";
    }
}