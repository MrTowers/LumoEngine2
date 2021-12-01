/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */
export function rand(min = 0, max = 0) {
    return Math.random() * (max - min + 1) + min;
}
