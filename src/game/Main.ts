import { spawnGameObject } from "../core/functions/spawnGameObject.js";
import { Vector2 } from "../core/math/Vector2.js";
import { GameObject } from "../core/objects/GameObject.js";
import { PA_AlphaOverLife } from "../core/render/particleSystem/components/PA_AlphaOverLife.js";
import { PA_Gravity } from "../core/render/particleSystem/components/PA_Gravity.js";
import { PA_InitialVelocity } from "../core/render/particleSystem/components/PA_InitialVelocity.js";
import { Particle } from "../core/render/particleSystem/Particle.js";
import { ParticleEmitter } from "../core/render/particleSystem/ParticleEmitter.js";
import { ParticleSystem } from "../core/render/particleSystem/ParticleSystem.js";
import { PP_Vignette } from "../core/render/postprocess/components/PP_Vignette.js";
import { PostprocessComponent } from "../core/render/postprocess/PostprocessComponent.js";
import { PostprocessEffect } from "../core/render/postprocess/PostprocessEffect.js";

export function main() {
    let x = new GameObject();
    let sys = new ParticleSystem();
    let part = new Particle("LUMO_light", 2);
    part.transform.scale = new Vector2(0.1, 0.1);
    part.components = [
        new PA_InitialVelocity(part, new Vector2(-1, -1), new Vector2(-0.1, -5)),
        new PA_AlphaOverLife(part)
    ]
    let em = new ParticleEmitter(part, sys, 0, 5);
    sys.addEmitter(em);
    x.addComponent(sys);

    spawnGameObject(x);
    sys.play();

    let effect = PostprocessEffect.create("vignette");
    effect.spawn();
}