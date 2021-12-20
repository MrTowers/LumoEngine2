import { Input } from "../core/control/Input.js";
import { screenToWorldLocation } from "../core/functions/screenToWorldLocation.js";
import { spawnGameObject } from "../core/functions/spawnGameObject.js";
import { Vector2 } from "../core/math/Vector2.js";
import { GameObject } from "../core/objects/GameObject.js";
import { PA_AlphaOverLife } from "../core/render/particleSystem/components/PA_AlphaOverLife.js";
import { PA_Orbit } from "../core/render/particleSystem/components/PA_Orbit.js";
import { PA_RandomLocation } from "../core/render/particleSystem/components/PA_RandomLocation.js";
import { Particle } from "../core/render/particleSystem/Particle.js";
import { ParticleEmitter } from "../core/render/particleSystem/ParticleEmitter.js";
import { ParticleSystem } from "../core/render/particleSystem/ParticleSystem.js";

export function main() {
    let x = new GameObject();
    let part = new Particle("LUMO_light", 20);
    part.transform.scale = new Vector2(0.03, 0.03);
    part.components = [
        new PA_Orbit(part, 1, 0.01),
        new PA_AlphaOverLife(part),
    ]
    let sys = new ParticleSystem();
    let em = new ParticleEmitter(part, sys, 0, 1);

    sys.addEmitter(em);
    x.addComponent(sys);

    spawnGameObject(x);

    x.update = () => {
        if (Input.getMouseButton("left")) {
            x.setPosition(screenToWorldLocation(Input.getMousePosition()));
            sys.burst();
        }
    }
}