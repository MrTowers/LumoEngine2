import { Vector2 } from "../../core/math/Vector2.js";
import { Component } from "../../core/objects/Component.js";

export class PlayerController extends Component {
    private speedx: number
    private speedy: number;
    constructor () {
        super("playerScript");
        this.speedx = 0;
        this.speedy = 0;

        document.addEventListener("keydown", (e) => {
            if (e.key == "w") {
                this.speedy = -1;
            }
            if (e.key == "s") {
                this.speedy = 1;
            }
            if (e.key == "a") {
                this.speedx = -1;
            }
            if (e.key == "d") {
                this.speedx = 1;
            }
        });

        document.addEventListener("keyup", (e) => {
            if (e.key == "w" || e.key == "s") {
                this.speedy = 0;
            }
            if (e.key == "a" || e.key == "d") {
                this.speedx = 0;
            }
        });
    }

    update (delta: number) {
        this.gameObject.setPosition(
            this.gameObject.getPosition()
            .add(new Vector2(this.speedx, this.speedy).normalize()
            .mulByNumber(delta))
        );
    }
}