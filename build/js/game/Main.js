import { spawnGameObject } from "../core/functions/spawnGameObject.js";
import { Vector2 } from "../core/math/Vector2.js";
import { GameObject } from "../core/objects/GameObject.js";
import { PA_Gravity } from "../core/render/particleSystem/components/PA_Gravity.js";
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
    let location = new Vector2();
    let p = new Particle("LUMO_light", 1);
    p.transform.scale = new Vector2(0.25, 0.25);
    let particleSystem = new GameObject();
    let system = new ParticleSystem();
    let em1 = new ParticleEmitter(p, system, 0.25, 1);
    em1.components = [
        new PA_Gravity(p)
    ];
    em1.play();
    system.addEmitter(em1);
    particleSystem.addComponent(system);
    spawnGameObject(particleSystem);
}
