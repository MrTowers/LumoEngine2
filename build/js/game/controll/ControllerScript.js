import { Input } from "../../core/control/Input.js";
import { Component } from "../../core/objects/Component.js";
import { Camera } from "../../core/render/Camera.js";
export class ControllerScript extends Component {
    constructor() {
        super("controller script");
    }
    update(delta) {
        if (Input.getMouseButton("left")) {
            Camera.addPosition(Input.getMouseMovement().mulByNumber(-1));
        }
    }
}
