import { playSound } from "../core/functions.js";
import { Load } from "../core/Load.js";
export function main() {
    Load.sound("sound.mp3", "test");
    document.addEventListener("keydown", (e) => {
        if (e.key == " ") {
            playSound("test");
        }
    });
}
