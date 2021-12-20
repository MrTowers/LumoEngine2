import { PP_Vignette } from "./components/PP_Vignette.js";
export class PostprocessEffect {
    static create(name) {
        switch (name) {
            case "vignette": {
                return new PP_Vignette();
            }
        }
    }
}
