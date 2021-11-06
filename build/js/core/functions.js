import { RIM_WORLD } from "../RimWorld.js";
export function spawnGameObject(gameObject) {
    RIM_WORLD.objects.push(gameObject);
}
export function rand(min = 0, max = 0) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
export function clamp(input = 0, min = 0, max = 0) {
    return Math.min(Math.max(input, min), max);
}
