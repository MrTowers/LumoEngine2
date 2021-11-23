import { screenToWorldLocation } from "../core/functions/screenToWorldLocation.js";
import { spawnGameObject } from "../core/functions/spawnGameObject.js";
import { Vector2 } from "../core/math/Vector2.js";
import { Component } from "../core/objects/Component.js";
import { GameObject } from "../core/objects/GameObject.js";
import { Camera } from "../core/render/Camera.js";
import { Sprite } from "../core/render/Sprite.js";
import { LUMO_ENGINE2 } from "../LumoEngine2.js";

export class CameraController extends Component {
    cam: Camera;
    speed: number;
    movex: number;
    movey: number;
    constructor () {
        super();
        this.cam = LUMO_ENGINE2.camera;
        this.speed = 10;
        this.movex = 0;
        this.movey = 0;
        document.addEventListener("keydown", (e) => {
            if (e.key == 'w') {
                this.movey = -1;
            }

            if (e.key == 's') {
                this.movey = 1;
            }

            if (e.key == 'a') {
                this.movex = -1;
            }

            if (e.key == 'd') {
                this.movex = 1;
            }
        });

        document.addEventListener("keyup", (e) => {
            if (e.key == 'w') {
                this.movey = 0;
            }

            if (e.key == 's') {
                this.movey = 0;
            }

            if (e.key == 'a') {
                this.movex = 0;
            }

            if (e.key == 'd') {
                this.movex = 0;
            }
        });

        document.addEventListener("mousedown", (e) => {
            let go = new GameObject();
            let sprite = new Sprite("LUMO_light");
            sprite.setSize(100);
            go.addComponent(sprite);
            spawnGameObject(go, screenToWorldLocation(new Vector2(e.x, e.y)));
        });
    }

    update () {
        this.cam.position = this.cam.position.add(new Vector2(this.movex, this.movey).normalize().mulByNumber(this.speed));
    }
}