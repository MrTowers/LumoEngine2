import { Vector2 } from "./Vector2.js";
export class Transform {
    constructor(position = new Vector2(), scale = new Vector2()) {
        this.position = position;
        this.scale = scale;
    }
    add(t = new Transform()) {
        return new Transform(this.position.add(t.position), this.scale.add(t.scale));
    }
}
