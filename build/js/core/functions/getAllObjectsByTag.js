import { LUMO_ENGINE2 } from "../../LumoEngine2.js";
export function getAllObjectByTag(tag) {
    let tab = [];
    for (let i in LUMO_ENGINE2.scene.objects) {
        let obj = LUMO_ENGINE2.scene.objects[i];
        if (obj.tag == tag) {
            tab.push(obj);
        }
    }
    return tab;
}
