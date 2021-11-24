/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */


import { LUMO_settings } from "./core/LUMO_settings.js";
import { postinit } from "./core/postinit.js";
import { Engine } from "./core/render/Engine.js";
import { main } from "./game/Main.js";


export const LUMO_ENGINE2 = new Engine();

let lastTime = 0;
let now = performance.now();
let delta = 0;

function tick () {
    now = performance.now();
    delta = now - lastTime;
    lastTime = now;
    LUMO_ENGINE2.update(delta);
    LUMO_ENGINE2.render();
    if (LUMO_settings.debug) {
        LUMO_ENGINE2.ctx.save();
        LUMO_ENGINE2.ctx.fillStyle = "white";
        LUMO_ENGINE2.ctx.fillText(`FPS: ${(1000/delta).toFixed(0)}`, 0, 10);
        LUMO_ENGINE2.ctx.restore();
    }
    requestAnimationFrame(tick);
}

tick();
postinit();
main();