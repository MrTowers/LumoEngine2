import { LUMO_ENGINE2 } from "../../LumoEngine2.js";
import { GameObject } from "../objects/GameObject.js";

export function getAllObjectByTag (tag: string) : GameObject[] {
    let tab = [];
    for (let i in LUMO_ENGINE2.scene.objects) {
        let obj = LUMO_ENGINE2.scene.objects[i];
        if (obj.tag == tag) {
            tab.push(obj);
        }
    }

    return tab;
}