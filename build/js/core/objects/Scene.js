export class Scene {
    constructor() {
        this.objects = [];
    }
    spawnGameObject(gameObject) {
        this.objects.push(gameObject);
        gameObject.start();
    }
    update(delta = 0) {
        for (let i in this.objects) {
            this.objects[i].update(delta);
        }
    }
    render(ctx, canvas) {
        for (let i in this.objects) {
            this.objects[i].render(ctx, canvas);
        }
    }
}
