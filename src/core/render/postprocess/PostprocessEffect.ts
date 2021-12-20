import { PP_Vignette } from "./components/PP_Vignette.js";
import { PostprocessComponent } from "./PostprocessComponent.js";

type _effect = "vignette";

export class PostprocessEffect {
    static create(name: _effect) : PostprocessComponent {
        switch(name) {
            case "vignette": {
                return new PP_Vignette();
            }
        }
    }
}