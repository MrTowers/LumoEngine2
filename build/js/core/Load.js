/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */
import { LUMO_ENGINE2 } from "../LumoEngine2.js";
import { AudioSource } from "./audio/AudioSource.js";
export class Load {
    static texture(src = "", name = "") {
        let x = new Image();
        x.src = `../src/game/${src}`;
        LUMO_ENGINE2.textures[name] = x;
    }
    static file(src = "", callback = (data) => { }) {
        let x = new XMLHttpRequest();
        x.open("get", src);
        x.onload = () => {
            callback(x.responseText);
        };
        x.send();
    }
    static audio(src = "", name = "") {
        let dest = `../src/game/${src}`;
        let audio = new Audio(dest);
        audio.load();
        LUMO_ENGINE2.sounds[name] = new AudioSource(dest);
    }
    static addTextureToPreload(src, name) {
        let x = { src, name };
        Load.texturesToLoad.push(x);
    }
    static startTexturePreload(callback = () => { }) {
        this.toLoadCount = this.texturesToLoad.length;
        this.loaded = 0;
        this.loadNext(callback);
    }
    static loadNext(callback = () => { }) {
        let x = new Image();
        x.onload = () => {
            this.loaded++;
            if (Load.texturesToLoad.length > 0) {
                this.loadNext(callback);
            }
            else {
                callback();
            }
        };
        let obj = Load.texturesToLoad.pop();
        if (!obj) {
            console.error("Preload error, there is no textures to load");
        }
        x.src = `../src/game/${obj.src}`;
        LUMO_ENGINE2.textures[obj.name] = x;
    }
}
Load.texturesToLoad = [];
Load.toLoadCount = 0;
Load.loaded = 0;
