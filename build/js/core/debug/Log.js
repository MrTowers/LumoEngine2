//kompletnie do zrobienia od nowa
import { Logger } from "./Logger.js";
export class Log {
    constructor(text, time = 5) {
        this.text = text;
        this.time = time;
    }
    update(delta) {
        this.time -= delta / 1000;
        if (this.time <= 0) {
            this.destroy();
        }
    }
    render(ctx, position) {
        ctx.save();
        ctx.fillStyle = "white";
        ctx.fillText(this.text, 0, (position * 10) + 20);
        ctx.restore();
    }
    destroy() {
        Logger.destroyLog(this);
    }
}
