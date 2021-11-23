import { LUMO_ENGINE2 } from "../../LumoEngine2.js";
export function spawnGameObject(gameObject, location = gameObject.getPosition()) {
    gameObject.setPosition(location);
    LUMO_ENGINE2.scene.spawnGameObject(gameObject);
}
