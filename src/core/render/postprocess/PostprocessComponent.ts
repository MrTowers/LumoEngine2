import { LUMO_ENGINE2 } from "../../../LumoEngine2.js";
import { PP_Vignette } from "./components/PP_Vignette.js";

export class PostprocessComponent {
    render (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {}

    spawn() {
        LUMO_ENGINE2.postprocessEffects.push(this);
    }

    destroy () {
        LUMO_ENGINE2.postprocessEffects.splice(LUMO_ENGINE2.postprocessEffects.indexOf(this), 1);
    }
}