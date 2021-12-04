/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */

import { between } from "../functions/math/between.js";
import { clamp } from "../functions/math/clamp.js";
import { rand } from "../functions/math/rand.js";

export class Vector2 {
    x: number;
    y: number;

    constructor (x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    add (v: Vector2) : Vector2 {
        return new Vector2(this.x + v.x, this.y + v.y);
    }

    sub (v: Vector2) : Vector2 {
        return new Vector2(this.x - v.x, this.y - v.y);
    }

    div (v: Vector2) : Vector2 {
        return new Vector2(this.x / v.x, this.y - v.y);
    }

    mul (v: Vector2) : Vector2 {
        return new Vector2(this.x * v.x, this.y * v.y);
    }

    length () : number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    normalize () : Vector2 {
        let length = this.length();

        if (length == 0) {
            return new Vector2(0, 0);
        }

        return new Vector2(this.x / length, this.y / length);
    }

    distance (v: Vector2) : number {
        let x = this.x - v.x;
        let y = this.y - v.y;

        return Math.sqrt(x * x + y * y);
    }

    clone () : Vector2 {
        return new Vector2(this.x, this.y);
    }

    addByNumber (n: number) : Vector2 {
        return new Vector2(this.x + n, this.y + n);
    }

    subByNumber (n: number) : Vector2 {
        return new Vector2(this.x - n, this.y - n);
    }

    divByNumber (n: number) : Vector2 {
        return new Vector2(this.x / n, this.y / n);
    }

    mulByNumber (n: number) : Vector2 {
        return new Vector2(this.x * n, this.y * n);
    }

    flatten () : Vector2 {
        let div = Math.max(Math.abs(this.x), Math.abs(this.y));
        return new Vector2(this.x / div, this.y / div);
    }

    toString () : string {
        return `x: ${this.x}, y: ${this.y}`;
    }

    invert () : Vector2 {
        return new Vector2(-this.x, -this.y);
    }

    static between (input: Vector2, min: Vector2, max: Vector2) : boolean {
        if (between(input.x, min.x, max.x)) {
            if (between(input.y, min.y, max.y)) {
                return true;
            }
        }
        return false;
    }

    static clamp (input: Vector2, min = 0, max = 0) : Vector2 {
        let x = input.x;
        let y = input.y;
        x = clamp(x, min, max);
        y = clamp(y, min, max);
        return new Vector2(x, y);
    }

    static equal (in1: Vector2, in2: Vector2) : boolean {
        return in1.x == in2.x && in1.y == in2.y;
    }

    static randomInRange (xmin = 0, xmax = 0, ymin = 0, ymax = 0) : Vector2 {
        let x = rand(xmin, xmax);
        let y = rand(ymin, ymax);

        return new Vector2(x, y);
    }

    static direction (from: Vector2, to: Vector2) : Vector2 {
        let x = to.x - from.x;
        let y = to.y - from.y;

        return new Vector2(x, y);
    }
}