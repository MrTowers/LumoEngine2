import { Vector2 } from "../../core/math/Vector2.js";
import { Component } from "../../core/objects/Component.js";
export class PlayerController extends Component {
    constructor() {
        super();
        this.mousePosition = new Vector2();
        document.addEventListener("mousemove", (e) => {
            this.mousePosition = new Vector2(e.x, e.y);
        });
        document.addEventListener("mousedown", (e) => {
            this.mousePosition = new Vector2(e.x, e.y);
            this.onClick();
        });
    }
    onClick() {
        let ai = this.gameObject.getComponentByTag("ai");
        ai.moveTo(this.mousePosition);
    }
    onattach() {
        let ai = this.gameObject.getComponentByTag("ai");
        ai.controlled = true;
    }
}
