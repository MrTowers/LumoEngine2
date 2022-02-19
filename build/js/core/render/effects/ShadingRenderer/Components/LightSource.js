import { ShadingComponent } from "../ShadingComponent.js";
import { ShadingRendererScript } from "../ShadingRenderer.js";
export class LightSource extends ShadingComponent {
    constructor(power = 0) {
        super();
        this.power = power;
    }
    spawn() {
        ShadingRendererScript.modulators.push(this);
    }
}
