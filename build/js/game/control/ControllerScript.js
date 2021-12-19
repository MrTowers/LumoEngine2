import { Input } from "../../core/control/Input.js";
import { getAllObjectByTag } from "../../core/functions/getAllObjectsByTag.js";
import { between } from "../../core/functions/math/between.js";
import { screenToWorldLocation } from "../../core/functions/screenToWorldLocation.js";
import { Vector2 } from "../../core/math/Vector2.js";
import { Component } from "../../core/objects/Component.js";
import { Camera } from "../../core/render/Camera.js";
import { Task } from "../classes/Task.js";
import { tasker } from "../Main.js";
let maxzoom = 5;
let minzoom = 0.5;
let zoomspeed = 0.001;
export class ControllerScript extends Component {
    constructor() {
        super("controller script");
        this.cameraSpeed = 5;
        this.zoom = 1.1;
        Camera.setZoom(this.zoom);
        document.addEventListener("wheel", (e) => {
            if (between(this.zoom + (e.deltaY * zoomspeed), minzoom, maxzoom)) {
                this.zoom += e.deltaY * zoomspeed;
                Camera.setZoom(this.zoom);
            }
        });
    }
    update(delta) {
        if (Input.getKey("w")) {
            Camera.addPosition(Vector2.up().mulByNumber(this.cameraSpeed));
        }
        if (Input.getKey("s")) {
            Camera.addPosition(Vector2.down().mulByNumber(this.cameraSpeed));
        }
        if (Input.getKey("a")) {
            Camera.addPosition(Vector2.left().mulByNumber(this.cameraSpeed));
        }
        if (Input.getKey("d")) {
            Camera.addPosition(Vector2.right().mulByNumber(this.cameraSpeed));
        }
        if (Input.getMouseButton("left")) {
            this.checkIfThereIsWorker();
        }
        if (Input.getMouseButton("right")) {
            this.setTask();
        }
    }
    checkIfThereIsWorker() {
        if (this.selectedWorker) {
            this.selectedWorker.script.selectSprite.alpha = 0;
        }
        let tab = getAllObjectByTag("worker");
        for (let i in tab) {
            if (tab[i].getPosition().distance(screenToWorldLocation(Input.getMousePosition())) < 20) {
                this.selectedWorker = tab[i];
                this.selectedWorker.script.selectSprite.alpha = 1;
                return;
            }
        }
    }
    setTask() {
        if (this.selectedWorker) {
            if (this.selectedWorker.script.item) {
                if (this.selectedWorker.script.item.amount > 0) {
                    this.selectedWorker.script.dropItem();
                }
            }
            tasker.script.addTask(this.selectedWorker.script.accualTask);
            this.selectedWorker.script.setTask(new Task("idz do pozycji", this.selectedWorker.script.workertype, screenToWorldLocation(Input.getMousePosition()), () => { }, () => { }, 5, "working"));
        }
    }
}
