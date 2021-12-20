import { setTimeScale } from "../core/functions/setTimeScale.js";
import { spawnGameObject } from "../core/functions/spawnGameObject.js";
import { Load } from "../core/Load.js";
import { Color } from "../core/math/Color.js";
import { Vector2 } from "../core/math/Vector2.js";
import { GameObject } from "../core/objects/GameObject.js";
import { Scene } from "../core/objects/Scene.js";
import { Sprite } from "../core/render/Sprite.js";
import { ProgressBar } from "../core/render/ui/Progressbar.js";
import { LUMO_ENGINE2 } from "../LumoEngine2.js";
import { ItemsDatabase } from "./classes/ItemsDatabase.js";
import { Task } from "./classes/Task.js";
import { Controller } from "./control/Controller.js";
import { loadLanguage } from "./language/lang_int.js";
import { GameManager } from "./prefabs/gamemanager/GameManager.js";
import { ItemObject } from "./prefabs/itemObject/ItemObject.js";
import { Worker } from "./prefabs/robotnik/Worker.js";
import { Tasker } from "./prefabs/tasker/Tasker.js";
export const tasker = new Tasker();
export const itemDB = new ItemsDatabase();
export let language;
export const gameManager = new GameManager();
//wczytywanie jezyka
let selectedLanguage = localStorage.getItem("language");
if (!selectedLanguage) {
    selectedLanguage = "ENG";
    localStorage.setItem("language", "ENG");
}
export function main() {
    //** create language center **
    //LANG_Generate();
    //LANG_Update();
    loadLanguage(selectedLanguage, (data) => {
        language = data;
        //loadAssets();
        openIntro();
    });
}
function openIntro() {
    Load.texture("./textures/intro and menu/logo.png", "logo");
    let logo = new GameObject();
    let logosprite = new Sprite("logo");
    logosprite.setSize(300);
    logo.addComponent(logosprite);
    spawnGameObject(logo);
    //progress bar
    let progressbar = new ProgressBar(new Color(1, 1, 1, 1));
    progressbar.size = new Vector2(300, 30);
    progressbar.position = new Vector2(0, 150);
    let progress2 = new ProgressBar(new Color(1, 1, 1, 0.25));
    progress2.size = new Vector2(320, 50);
    progress2.position = new Vector2(0, 150);
    progress2.value = 1;
    logo.addComponent(progress2);
    logo.addComponent(progressbar);
    logo.update = () => {
        progressbar.value = Load.loaded / Load.toLoadCount;
        console.log(progressbar.value);
    };
    loadAssets();
}
function loadAssets() {
    Load.addTextureToPreload("./textures/workers/robotnik.png", "worker");
    Load.addTextureToPreload("./textures/items/itemssprite.png", "items");
    Load.addTextureToPreload("./textures/workers/magazynier.png", "warehouseMan");
    Load.addTextureToPreload("./textures/progressbar.png", "worker_progressbar");
    Load.addTextureToPreload("./textures/actions.png", "actions");
    Load.addTextureToPreload("./textures/workers/zaznaczony.png", "worker_select");
    Load.startTexturePreload(() => {
        LUMO_ENGINE2.scene = new Scene();
        startGame();
    });
}
//koniec wczytywania
function startGame() {
    spawnGameObject(new Controller());
    spawnGameObject(tasker);
    spawnGameObject(gameManager);
    //testy
    for (let i = 0; i < 15; i++) {
        let y = new Worker("worker");
        //let x = new Worker("warehouse men");
        spawnGameObject(y, Vector2.randomInRange(-500, 500, -500, 500));
        //spawnGameObject(x, Vector2.randomInRange(-500, 500, -500, 500));
    }
    let item = ItemsDatabase.byId(0);
    item.amount = 5000;
    let io = new ItemObject(item);
    spawnGameObject(io, Vector2.randomInRange(-200, 200, -200, 200));
    let item2 = ItemObject.find(0);
    item2.script.reserved = item2.script.item.amount;
    for (let i = 0; i < item2.item.amount; i++) {
        let task = new Task("take item and set it on the middle", "worker", item2.getPosition(), () => { }, () => {
            task.worker.takeItem(item2.item);
        }, 0, "taking item");
        task.nextTask = new Task("drop it on middle", "worker", Vector2.randomInRange(-1000, 1000, -1000, 1000), () => { }, () => {
            task.worker.dropItem();
        }, 0, "droping item");
        tasker.script.addTask(task);
    }
    setTimeScale(1);
    setInterval(() => {
        let txt = "";
        for (let i in LUMO_ENGINE2.scene.objects) {
            let obj = LUMO_ENGINE2.scene.objects[i];
            txt += `${Number(i) + 1}. ${obj.uniqid}\n`;
        }
        console.log(txt);
    }, 5000);
}
