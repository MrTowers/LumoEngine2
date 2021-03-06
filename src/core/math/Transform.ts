/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */


import { LUMO_ENGINE2 } from "../../LumoEngine2.js";
import { Vector2 } from "./Vector2.js";

export class Transform {
    position: Vector2;
    z: number;
    scale: Vector2;
    rotation: number;

    constructor (position = new Vector2(), scale = new Vector2(1, 1), rotation = 0) {
        this.position = position;
        this.scale = scale;
        this.rotation = rotation;
        this.z = 0;
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

    clone () : Transform {
        return new Transform(this.position.clone(), this.scale.clone(), this.rotation);
    }
}