/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */
import { between } from "../functions/math/between.js";
import { clamp } from "../functions/math/clamp.js";
import { rand } from "../functions/math/rand.js";
export class Vector2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    add(v) {
        return new Vector2(this.x + v.x, this.y + v.y);
    }
    sub(v) {
        return new Vector2(this.x - v.x, this.y - v.y);
    }
    div(v) {
        return new Vector2(this.x / v.x, this.y - v.y);
    }
    mul(v) {
        return new Vector2(this.x * v.x, this.y * v.y);
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    normalize() {
        let length = this.length();
        if (length == 0) {
            return new Vector2(0, 0);
        }
        return new Vector2(this.x / length, this.y / length);
    }
    distance(v) {
        let x = this.x - v.x;
        let y = this.y - v.y;
        return Math.sqrt(x * x + y * y);
    }
    clone() {
        return new Vector2(this.x, this.y);
    }
    addByNumber(n) {
        return new Vector2(this.x + n, this.y + n);
    }
    subByNumber(n) {
        return new Vector2(this.x - n, this.y - n);
    }
    divByNumber(n) {
        return new Vector2(this.x / n, this.y / n);
    }
    mulByNumber(n) {
        return new Vector2(this.x * n, this.y * n);
    }
    static between(input, min, max) {
        if (between(input.x, min.x, max.x)) {
            if (between(input.y, min.y, max.y)) {
                return true;
            }
        }
        return false;
    }
    static clamp(input, min = 0, max = 0) {
        let x = input.x;
        let y = input.y;
        x = clamp(x, min, max);
        y = clamp(y, min, max);
        return new Vector2(x, y);
    }
    static equal(in1, in2) {
        return in1.x == in2.x && in1.y == in2.y;
    }
    static randomInRange(xmin = 0, xmax = 0, ymin = 0, ymax = 0) {
        let x = rand(xmin, xmax);
        let y = rand(ymin, ymax);
        return new Vector2(x, y);
    }
}
