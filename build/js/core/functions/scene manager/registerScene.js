import { LUMO_ENGINE2 } from "../../../LumoEngine2.js";
export function registerScene(scene, name = "") {
    LUMO_ENGINE2.scenes[name] = scene;
}
