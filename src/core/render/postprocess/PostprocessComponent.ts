import { PP_Vignette } from "./components/PP_Vignette.js";

type _effect = "vignette";

export class PostprocessComponent {
    render (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {}

    static create(name: _effect) : PostprocessComponent {
        switch(name) {
            case "vignette": {
                return new PP_Vignette();
            }
        }
    }
}