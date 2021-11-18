import { AudioCue } from "../core/audio/AudioCue.js";
import { AudioSource } from "../core/audio/AudioSource.js";
import { DoOnce } from "../core/functions/DoOnce.js";
import { spawnGameObject } from "../core/functions/spawnGameObject.js";
import { Load } from "../core/Load.js";
import { Vector2 } from "../core/math/Vector2.js";
import { GameObject } from "../core/objects/GameObject.js";
import { Sprite } from "../core/render/Sprite.js";
import { LUMO_ENGINE2 } from "../LumoEngine2.js";

export function main() {

    let dxo = new DoOnce(() => {
        let as = new AudioSource("./to ja.mp3");
        Load.texture("./4.png", "test");
        let go = new GameObject();
        let ac = new AudioCue(as.audio);
        go.addComponent(ac);
        go.addComponent(new Sprite("test"));
        ac.positionVolume = true;
        ac.positionStereo = true;
        ac.play();

        spawnGameObject(go);

        let dir = 1;

        setInterval(() => {
            go.setPosition(go.getPosition().add(new Vector2(dir, 0)))
        }, 10);

        setTimeout(() => {
            dir = -1;
        }, 10000);
    });

    document.addEventListener("keydown", () => {
        dxo.run();
    });
}