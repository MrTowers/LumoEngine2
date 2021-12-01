import { LUMO_ENGINE2 } from "../../LumoEngine2.js";
import { LUMO_settings } from "../LUMO_settings.js";
import { GameObject } from "../objects/GameObject.js";
export function getGameObjectByTag(tag) {
    for (let i in LUMO_ENGINE2.scene.objects) {
        let obj = LUMO_ENGINE2.scene.objects[i];
        if (obj.tag == tag) {
            return obj;
        }
    }
    if (LUMO_settings.debug) {
        console.error(`GameObject with tag "${tag}" cannot be found`);
    }
    return new GameObject();
}
