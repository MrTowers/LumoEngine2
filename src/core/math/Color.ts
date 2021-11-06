export class Color {
    r: number;
    g: number;
    b: number;
    a: number;

    constructor (r = 0, g = 0, b = 0, a = 1) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    toString () : string {
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
    }
}