//kompletnie do zrobienia od nowa

import { LUMO_ENGINE2 } from "../../LumoEngine2.js";
import { Log } from "./Log.js";

export class Logger {
    logs: Log[];
    constructor () {
        this.logs = [];
    }

    update (delta: number) {
        for (let i in this.logs) {
            this.logs[i].update(delta);
        }
    }

    render (ctx: CanvasRenderingContext2D) {
        for (let i = 0; i < this.logs.length; i++) {
            this.logs[i].render(ctx, i);
        }
    }

    static log (text: string, time = 5) {
        LUMO_ENGINE2.logger.logs.push(new Log(text, time));
    }

    static destroyLog (log: Log) {
        LUMO_ENGINE2.logger.logs.splice(LUMO_ENGINE2.logger.logs.indexOf(log));
    }
}