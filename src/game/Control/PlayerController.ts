import { spawnGameObject } from "../../core/functions.js";
import { Color } from "../../core/math/Color.js";
import { Vector2 } from "../../core/math/Vector2.js";
import { Component } from "../../core/objects/Component.js";
import { GameObject } from "../../core/objects/GameObject.js";
import { Box } from "../../core/render/Box.js";
import { AIController } from "./AIController.js";

export class PlayerController extends Component {
    mousePosition: Vector2;

    constructor () {
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

    onClick () {
        let ai = <AIController>this.gameObject.getComponentByTag("ai");
        ai.moveTo(this.mousePosition);
    }

    onattach() {
        let ai = <AIController>this.gameObject.getComponentByTag("ai");
        ai.controlled = true;
    }
}