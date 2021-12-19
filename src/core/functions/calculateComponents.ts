import { LUMO_ENGINE2 } from "../../LumoEngine2.js";

export function calculateComponents () {
    let x = 0;

    for (let i in LUMO_ENGINE2.scene.objects) {
        for (let j in LUMO_ENGINE2.scene.objects[i].components) {
            x++;
        }
    }

    return x;
}