import { spawnGameObject } from "../core/functions/spawnGameObject.js";
import { Load } from "../core/Load.js";
import { Vector2 } from "../core/math/Vector2.js";
import { GameObject } from "../core/objects/GameObject.js";
import { LightSource } from "../core/render/effects/ShadingRenderer/Components/LightSource.js";
import { ShadingRenderer } from "../core/render/effects/ShadingRenderer/ShadingRenderer.js";
import { Sprite } from "../core/render/Sprite.js";
import { Gracz } from "./Gracz.js";
export function main() {
    Load.addTextureToPreload("./robotnik.png", "gracz");
    Load.addTextureToPreload("./traawa.png", "grass");
    Load.startTexturePreload(() => {
        startGame();
    });
}
function startGame() {
    for (let x = -32; x < 32; x++) {
        for (let y = -32; y < 32; y++) {
            let g = new GameObject();
            let s = new Sprite("grass");
            s.setSize(50);
            g.addComponent(s);
            spawnGameObject(g, new Vector2(x * 50, y * 50));
        }
    }
    //spawning player
    spawnGameObject(new Gracz());
    spawnGameObject(new ShadingRenderer(0.5));
    let lightSource = new LightSource(200);
    lightSource.spawn();
    setInterval(() => {
        lightSource.position.x += 1;
    }, 0);
}
