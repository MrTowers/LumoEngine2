import { getGameObjectByTag } from "../../../core/functions/getGameObjectByTag.js";
import { spawnGameObject } from "../../../core/functions/spawnGameObject.js";
import { Vector2 } from "../../../core/math/Vector2.js";
import { Component } from "../../../core/objects/Component.js";
import { Item } from "../../classes/Item.js";
import { Task } from "../../classes/Task.js";
import { language } from "../../Main.js";
import { ItemObject } from "../itemObject/ItemObject.js";
export class WorkerScript extends Component {
    constructor(workertype = "worker", tilemap, progress, taskIcon, selectSprite) {
        super("workerscript");
        this.accualTask = new Task();
        this.tasker = getGameObjectByTag("tasker").getComponentByTag("taskerscript");
        this.moveToPosition = new Vector2();
        this.moving = false;
        this.moveSpeed = 300;
        this.state = "idle";
        this.worktime = 0;
        this.workertype = workertype;
        this.itemTileMap = tilemap;
        this.progressBar = progress;
        this.taskIcon = taskIcon;
        this.selectSprite = selectSprite;
        switch (workertype) {
            case "worker": {
                this.name = language.worker_worker;
                break;
            }
            case "warehouse men": {
                this.name = language.worker_warehousemen;
                break;
            }
            default: {
                this.name = language.worker_worker;
                break;
            }
        }
    }
    update(delta) {
        if (this.state == "idle") {
            this.accualTask = this.tasker.getNewTask(this.workertype);
            this.accualTask.worker = this;
            this.state = "moving to task";
        }
        if (this.moving) {
            let pos = this.gameObject.getPosition();
            this.gameObject.setPosition(pos.add(Vector2.clamp(this.moveToPosition.sub(pos), -this.moveSpeed * (delta / 1000), this.moveSpeed * (delta / 1000))));
            if (Vector2.equal(this.gameObject.getPosition(), this.moveToPosition)) {
                this.moving = false;
                this.accualTask.arrive();
                this.worktime = this.accualTask.time;
                this.state = "working";
                this.progressBar.alpha = 0.5;
                this.taskIcon.alpha = 1;
                //ustawianie ikonki
                let icon = 0;
                switch (this.accualTask.taskType) {
                    case "taking item": {
                        icon = 0;
                        break;
                    }
                    case "droping item": {
                        icon = 1;
                        break;
                    }
                    case "idling": {
                        icon = 2;
                        break;
                    }
                    case "working": {
                        icon = 3;
                        break;
                    }
                    default: {
                        icon = 2;
                    }
                }
                this.taskIcon.display = icon;
            }
        }
        if (this.state == "moving to task" && !this.moving) {
            this.moveTo(this.accualTask.position);
        }
        if (this.state == "working") {
            this.progressBar.display = 8 - Math.floor((this.worktime / this.accualTask.time) * 8);
            this.worktime -= delta / 1000;
            if (this.worktime <= 0) {
                this.accualTask.done();
                this.progressBar.alpha = 0;
                this.taskIcon.alpha = 0;
            }
        }
    }
    moveTo(position) {
        this.moveToPosition = position;
        this.moving = true;
    }
    takeItem(item) {
        this.item = new Item(item.id, item.name, 1, item.price);
        item.amount--;
        this.itemTileMap.display = item.id;
    }
    setTask(task) {
        this.accualTask = task;
        this.accualTask.worker = this;
        this.state = "moving to task";
        this.moveTo(this.accualTask.position);
    }
    dropItem() {
        let x = new ItemObject(this.item.clone());
        this.item.amount = 0;
        spawnGameObject(x, this.gameObject.getPosition());
        this.itemTileMap.display = -1;
    }
}
