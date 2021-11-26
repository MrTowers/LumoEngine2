import { LUMO_ENGINE2 } from "../../../LumoEngine2.js";
import { Vector2 } from "../../math/Vector2.js";
import { Component } from "../../objects/Component.js";
export class CameraShake extends Component {
    constructor(power = 1, time = 1) {
        super();
        this.power = power;
        this.time = time;
        this.startTime = time;
        this.left = time;
        this.playing = false;
    }
    play() {
        this.playing = true;
        this.time += this.startTime;
    }
    update(delta) {
        if (this.playing) {
            if (this.time > 0) {
                let range = (this.time / this.startTime) * this.power;
                LUMO_ENGINE2.camera.offset = Vector2.randomInRange(-range, range, -range, range);
                this.time -= delta / 1000;
            }
            else {
                this.stop();
            }
        }
    }
    stop() {
        this.playing = false;
        LUMO_ENGINE2.camera.offset = new Vector2();
        this.time = this.startTime;
    }
}
