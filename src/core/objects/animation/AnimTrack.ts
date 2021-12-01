/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */

import { LUMO_ENGINE2 } from "../../../LumoEngine2.js";
import { AnimKey } from "./AnimKey.js";

export class AnimTrack {
    keys: AnimKey[];
    time: number;
    value: number;
    prevKey: AnimKey;
    nextKey: AnimKey;
    paused: boolean;
    private maxtime: number;

    constructor (keys: AnimKey[]) {
        this.keys = keys.sort((a: AnimKey, b: AnimKey) : any => {
            return a.time - b.time;
        });
        this.time = 0;
        this.value = 0;
        this.prevKey = this.keys[0];
        this.nextKey = this.keys[1];
        this.paused = true;
        this.maxtime = this.keys[this.keys.length - 1].time;
        LUMO_ENGINE2.animations.push(this);
    }

    update (delta: number) {
        if (this.time >= this.maxtime) {
            this.paused = true;
        }

        if (!this.paused) {
            this.time += delta / 1000;
            this.findPrevKey();
            this.findNextKey();
            this.calculateValue();
        }
    }

    private calculateValue () {
        let t = this.time;
        let p = this.prevKey;
        let n = this.nextKey;

        if (t == p.time) {
            this.value = p.value;
            return;
        }

        if (t == n.time) {
            this.value = n.value;
            return;
        }

        let dt = n.time - p.time;
        let dv = n.value - p.value;

        this.value = p.value + (dv / dt) * (t - p.time);
    }

    private findPrevKey () {
        let t = this.time;
        for (let i = 0; i < this.keys.length; i++) {
            if (this.keys[i].time >= t) {
                this.prevKey = this.keys[i - 1];
                return;
            }
        }
    }

    private findNextKey () {
        let t = this.time;
        for (let i = 0; i < this.keys.length; i++) {
            if (this.keys[i].time > t) {
                this.nextKey = this.keys[i];
                return;
            }
        }
    }

    playFromStart () {
        this.paused = false;
        this.time = 0;
    }

    playFrom (time: number) {
        this.paused = false;
        this.time = time;
    }

    pause () {
        this.paused = true;
    }

    stop () {
        this.paused = true;
        this.time = 0;
    }

    play () {
        this.paused = false;
    }

    destroy () {
        LUMO_ENGINE2.animations.splice(LUMO_ENGINE2.animations.indexOf(this), 1);
    }

    setTime (time: number) {
        this.time = time;
        this.findPrevKey();
        this.findNextKey();
        this.calculateValue();
    }
}