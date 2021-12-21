import { Input } from "../core/control/Input.js";
import { screenToWorldLocation } from "../core/functions/screenToWorldLocation.js";
import { spawnGameObject } from "../core/functions/spawnGameObject.js";
import { Load } from "../core/Load.js";
import { Vector2 } from "../core/math/Vector2.js";
import { GameObject } from "../core/objects/GameObject.js";
import { PA_AlphaOverLife } from "../core/render/particleSystem/components/PA_AlphaOverLife.js";
import { PA_InitialVelocity } from "../core/render/particleSystem/components/PA_InitialVelocity.js";
import { Particle } from "../core/render/particleSystem/Particle.js";
import { ParticleEmitter } from "../core/render/particleSystem/ParticleEmitter.js";
import { ParticleSystem } from "../core/render/particleSystem/ParticleSystem.js";
export function main() {
    Load.addTextureToPreload("test.png", "test");
    Load.addTextureToPreload("test2.png", "test2");
    Load.startTexturePreload(() => {
        startGame();
    });
}
function startGame() {
    let x = new GameObject();
    let part = new Particle("test2", 20, "tilemap", new Vector2(612 / 4, 434 / 2));
    part.display = 0;
    part.transform.scale = new Vector2(0.5, 0.5);
    part.tilemapAnimSpeed = 10;
    part.components = [
        new PA_AlphaOverLife(part),
        new PA_InitialVelocity(part, new Vector2(-1, 0), new Vector2(1, -3))
    ];
    let sys = new ParticleSystem();
    let em = new ParticleEmitter(part, sys, 0, 5);
    sys.addEmitter(em);
    x.addComponent(sys);
    spawnGameObject(x);
    x.update = () => {
        if (Input.getMouseButton("left")) {
            x.setPosition(screenToWorldLocation(Input.getMousePosition()));
            sys.burst();
        }
    };
}
