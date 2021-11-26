import { spawnGameObject } from "../core/functions/spawnGameObject.js";
import { Vector2 } from "../core/math/Vector2.js";
import { GameObject } from "../core/objects/GameObject.js";
import { CameraShake } from "../core/render/effects/CameraShake.js";
import { PA_AlphaOverLife } from "../core/render/particleSystem/components/PA_AlphaOverLife.js";
import { PA_Gravity } from "../core/render/particleSystem/components/PA_Gravity.js";
import { PA_InitialVelocity } from "../core/render/particleSystem/components/PA_InitialVelocity.js";
import { PA_RandomLocation } from "../core/render/particleSystem/components/PA_RandomLocation.js";
import { Particle } from "../core/render/particleSystem/Particle.js";
import { ParticleEmitter } from "../core/render/particleSystem/ParticleEmitter.js";
import { ParticleSystem } from "../core/render/particleSystem/ParticleSystem.js";
import { Sprite } from "../core/render/Sprite.js";
import { CameraController } from "./CameraController.js";
export function main() {
    let player = new GameObject();
    player.addComponent(new CameraController());
    spawnGameObject(player);
    let sprite = new GameObject();
    let sp = new Sprite("LUMO_light");
    sp.setSize(100);
    sprite.addComponent(sp);
    spawnGameObject(sprite);
    let p = new Particle("LUMO_light", 10);
    let p2 = new Particle("LUMO_light", 10);
    p.transform.scale = new Vector2(0.01, 0.01);
    p2.transform.scale = new Vector2(0.05, 0.05);
    let particleSystem = new GameObject();
    let system = new ParticleSystem();
    let em1 = new ParticleEmitter(p, system, 0, 1000);
    let em2 = new ParticleEmitter(p2, system, 1, 1);
    let camerashake = new CameraShake(50, 0.5);
    p.components = [
        new PA_AlphaOverLife(p),
        new PA_InitialVelocity(p, new Vector2(-10, -10), new Vector2(10, 10))
    ];
    p2.components = [
        new PA_RandomLocation(p2, new Vector2(-500, -500), new Vector2(500, 500)),
        //new PA_InitialVelocity(p2),
        new PA_AlphaOverLife(p2),
        new PA_Gravity(p2)
    ];
    system.addEmitter(em1);
    system.addEmitter(em2);
    particleSystem.addComponent(system);
    particleSystem.addComponent(camerashake);
    spawnGameObject(particleSystem);
    setInterval(() => {
        camerashake.play();
        console.log(camerashake);
        system.burst();
    }, 1000);
}
