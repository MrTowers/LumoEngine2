/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */
import { calculateComponents } from "./core/functions/calculateComponents.js";
import { LUMO_settings } from "./core/LUMO_settings.js";
import { postinit } from "./core/postinit.js";
import { Engine } from "./core/render/Engine.js";
import { main } from "./game/Main.js";
let logoimage = document.getElementById("logo");
logoimage?.remove();
export const LUMO_ENGINE2 = new Engine();
let lastTime = 0;
let now = performance.now();
let delta = 0;
let ticksCounter = 0;
let fps = 0;
function tick() {
    now = performance.now();
    delta = (now - lastTime) * LUMO_ENGINE2.timescale;
    lastTime = now;
    LUMO_ENGINE2.update(delta);
    LUMO_ENGINE2.render();
    if (LUMO_settings.debug) {
        ticksCounter++;
        LUMO_ENGINE2.ctx.save();
        LUMO_ENGINE2.ctx.fillStyle = "white";
        LUMO_ENGINE2.ctx.fillText(`LUMO ENGINE 2 v${LUMO_ENGINE2.version}`, 0, 10);
        LUMO_ENGINE2.ctx.fillText(`FPS: ${fps}`, 0, 20);
        LUMO_ENGINE2.ctx.fillText(`Components amount: ${calculateComponents()}`, 0, 30);
        if (LUMO_settings.showTime) {
            LUMO_ENGINE2.ctx.textAlign = "right";
            LUMO_ENGINE2.ctx.fillText(`time: ${LUMO_ENGINE2.timepassed.toFixed(1)}`, LUMO_ENGINE2.canvas.width, 10);
        }
        LUMO_ENGINE2.ctx.restore();
    }
    if (LUMO_settings.fpsLimiter) {
        setTimeout(tick, 1000 / LUMO_settings.fpsMax);
    }
    else {
        requestAnimationFrame(tick);
    }
}
setInterval(() => {
    fps = ticksCounter;
    ticksCounter = 0;
}, 1000);
tick();
postinit();
main();
