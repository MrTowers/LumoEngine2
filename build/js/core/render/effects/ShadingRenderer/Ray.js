export class Ray {
    constructor(origin, direction, distance, normal, color, light, reflection, refraction, reflectionColor, refractionColor) {
        this.origin = origin;
        this.direction = direction;
        this.distance = distance;
        this.normal = normal;
        this.color = color;
        this.light = light;
        this.reflection = reflection;
        this.refraction = refraction;
        this.reflectionColor = reflectionColor;
        this.refractionColor = refractionColor;
    }
    getPoint(distance) {
        return this.origin.add(this.direction.mulByNumber(distance));
    }
}
