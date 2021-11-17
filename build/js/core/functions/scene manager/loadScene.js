import { LUMO_ENGINE2 } from "../../../LumoEngine2.js";
export function loadScene(name) {
    LUMO_ENGINE2.scene = LUMO_ENGINE2.scenes[name];
}
