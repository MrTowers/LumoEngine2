import { LUMO_ENGINE2 } from "../../../LumoEngine2.js";
export class PostprocessComponent {
    render(ctx, canvas) { }
    spawn() {
        LUMO_ENGINE2.postprocessEffects.push(this);
    }
    destroy() {
        LUMO_ENGINE2.postprocessEffects.splice(LUMO_ENGINE2.postprocessEffects.indexOf(this), 1);
    }
}
