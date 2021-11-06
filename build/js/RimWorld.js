import { Engine } from "./core/render/Engine.js";
import { main } from "./game/Main.js";
export const RIM_WORLD = new Engine();
let lastTime = 0;
let now = performance.now();
let delta = 0;
function tick() {
    now = performance.now();
    delta = now - lastTime;
    lastTime = now;
    RIM_WORLD.update(delta);
    RIM_WORLD.render();
    requestAnimationFrame(tick);
}
tick();
main();
