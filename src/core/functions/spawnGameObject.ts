import { LUMO_ENGINE2 } from "../../LumoEngine2.js";
import { Vector2 } from "../math/Vector2.js";
import { GameObject } from "../objects/GameObject.js";

export function spawnGameObject (gameObject: GameObject, location: Vector2 = gameObject.getPosition()) {
    gameObject.setPosition(location);
    LUMO_ENGINE2.scene.spawnGameObject(gameObject);
}