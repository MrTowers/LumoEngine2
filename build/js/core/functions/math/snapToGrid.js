/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */
export function snapToGrid(input = 0, gridSize = 16) {
    return input - (input % gridSize);
}
