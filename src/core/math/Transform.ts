/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */


import { Vector2 } from "./Vector2.js";

export class Transform {
    position: Vector2;
    scale: Vector2;

    constructor (position = new Vector2(), scale = new Vector2()) {
        this.position = position;
        this.scale = scale;
    }

    add (t = new Transform()) : Transform {
        return new Transform(this.position.add(t.position), this.scale.add(t.scale));
    }

    sub (t = new Transform()) : Transform {
        return new Transform(this.position.sub(t.position), this.scale.sub(t.scale));
    }

    mul (t = new Transform()) : Transform {
        return new Transform(this.position.mul(t.position), this.scale.mul(t.scale));
    }

    div (t = new Transform()) : Transform {
        return new Transform(this.position.div(t.position), this.scale.div(t.scale));
    }

    toString () : string {
        return `Transform: { position: ${this.position.toString()}, scale: ${this.scale.toString()} }`;
    }
}