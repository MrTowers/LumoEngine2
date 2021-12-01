/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */
import { LUMO_ENGINE2 } from "../LumoEngine2.js";
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
    static audio(src = "") {
        let audio = new Audio(src);
        audio.load();
    }
}
