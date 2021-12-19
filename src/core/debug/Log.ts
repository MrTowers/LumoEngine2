//kompletnie do zrobienia od nowa

import { Logger } from "./Logger.js";

export class Log {
    time: number;
    text: string;
    constructor (text: string, time = 5) {
        this.text = text;
        this.time = time;
    }

    update (delta: number) {
        this.time -= delta / 1000;
        if (this.time <= 0) {
            this.destroy();
        }
    }

    render (ctx: CanvasRenderingContext2D, position: number) {
        ctx.save();
        ctx.fillStyle = "white";
        ctx.fillText(this.text, 0, (position * 10) + 20);
        ctx.restore();
    }

    destroy () {
        Logger.destroyLog(this);
    }
}