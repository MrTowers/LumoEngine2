import { spawnGameObject } from "../core/functions/spawnGameObject.js";
import { Vector2 } from "../core/math/Vector2.js";
import { GameObject } from "../core/objects/GameObject.js";
import { PA_AlphaOverLife } from "../core/render/particleSystem/components/PA_AlphaOverLife.js";
import { PA_RandomLocation } from "../core/render/particleSystem/components/PA_RandomLocation.js";
import { Particle } from "../core/render/particleSystem/Particle.js";
import { ParticleEmitter } from "../core/render/particleSystem/ParticleEmitter.js";
import { ParticleSystem } from "../core/render/particleSystem/ParticleSystem.js";
export function main() {
    let p = new Particle("LUMO_light", 1);
    p.components = [
        new PA_AlphaOverLife(p),
        new PA_RandomLocation(p, new Vector2(-5, -5), new Vector2(5, 5))
    ];
    let sys = new ParticleSystem();
    let e = new ParticleEmitter(p, sys, 0, 5);
    sys.addEmitter(e);
    let obj = new GameObject();
    obj.addComponent(sys);
    sys.play();
    spawnGameObject(obj);
}
