import { Color } from "../../../core/math/Color.js";
import { Field } from "../../../core/math/Field.js";
import { Component } from "../../../core/objects/Component.js";
import { Box } from "../../../core/render/Box.js";
export class GameManagerScript extends Component {
    constructor() {
        super("game manager script");
        this.fieldSize = 1000;
        this.playerField = new Field(-this.fieldSize / 2, -this.fieldSize / 2, this.fieldSize, this.fieldSize);
    }
    start() {
        let x = new Box(this.fieldSize, this.fieldSize, new Color(0, 255, 0, 0.1));
        this.gameObject.addComponent(x);
    }
}
