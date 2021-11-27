import { LUMO_ENGINE2 } from "../../../LumoEngine2.js";
export class AnimTrack {
    constructor(keys) {
        this.keys = keys.sort((a, b) => {
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
    update(delta) {
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
    calculateValue() {
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
    findPrevKey() {
        let t = this.time;
        for (let i = 0; i < this.keys.length; i++) {
            if (this.keys[i].time >= t) {
                this.prevKey = this.keys[i - 1];
                return;
            }
        }
    }
    findNextKey() {
        let t = this.time;
        for (let i = 0; i < this.keys.length; i++) {
            if (this.keys[i].time > t) {
                this.nextKey = this.keys[i];
                return;
            }
        }
    }
    playFromStart() {
        this.paused = false;
        this.time = 0;
    }
    playFrom(time) {
        this.paused = false;
        this.time = time;
    }
    pause() {
        this.paused = true;
    }
    stop() {
        this.paused = true;
        this.time = 0;
    }
    play() {
        this.paused = false;
    }
    destroy() {
        LUMO_ENGINE2.animations.splice(LUMO_ENGINE2.animations.indexOf(this), 1);
    }
    setTime(time) {
        this.time = time;
        this.findPrevKey();
        this.findNextKey();
        this.calculateValue();
    }
}
