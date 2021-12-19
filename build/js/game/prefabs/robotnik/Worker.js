import { Vector2 } from "../../../core/math/Vector2.js";
import { GameObject } from "../../../core/objects/GameObject.js";
import { Sprite } from "../../../core/render/Sprite.js";
import { Tilemap } from "../../../core/render/Tilemap.js";
import { WorkerScript } from "./WorkerScript.js";
export class Worker extends GameObject {
    constructor(workertype = "worker") {
        super("worker");
        let sprite;
        switch (workertype) {
            case "worker": {
                sprite = new Sprite("worker");
                break;
            }
            case "warehouse men": {
                sprite = new Sprite("warehouseMan");
                break;
            }
            default: {
                sprite = new Sprite("LUMO_light");
            }
        }
        let progress = new Tilemap("worker_progressbar");
        progress.alpha = 0;
        progress.offset = new Vector2(0, -50);
        let tilemap = new Tilemap("items");
        let taskIcon = new Tilemap("actions");
        let selectSprite = new Sprite("worker_select");
        selectSprite.setSize(50);
        selectSprite.alpha = 0;
        taskIcon.offset = new Vector2(0, -50);
        taskIcon.alpha = 0;
        tilemap.display = -1;
        this.script = new WorkerScript(workertype, tilemap, progress, taskIcon, selectSprite);
        sprite.setSize(50);
        this.addComponent(selectSprite);
        this.addComponent(sprite);
        this.addComponent(this.script);
        this.addComponent(tilemap);
        this.addComponent(progress);
        this.addComponent(taskIcon);
        this.setZ(40);
    }
}
