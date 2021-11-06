export class Component {
    constructor() {
        this.tag = "untagged";
    }
    update(delta = 0) {
    }
    render(ctx, canvas) {
    }
    onattach() {
    }
    destroy() {
        this.gameObject.components.splice(this.gameObject.components.indexOf(this), 1);
    }
}
