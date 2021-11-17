import { LUMO_ENGINE2 } from "../../../LumoEngine2.js";
export function addScene(scene, name = "") {
    LUMO_ENGINE2.scenes[name] = scene;
}
