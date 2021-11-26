export function rand (min = 0, max = 0) : number {
    return Math.random() * (max - min + 1) + min;
}