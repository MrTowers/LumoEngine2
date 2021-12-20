import { Load } from "../../core/Load.js";
import { _langbase } from "./base.js";
export let LANG_BASE = new _langbase();
export function LANG_Generate() {
    console.log(JSON.stringify(LANG_BASE));
}
export function LANG_Update() {
    let lang = prompt("wklej tutaj caly plik z jezykiem ktory chcesz edytowac");
    let x = JSON.parse(lang);
    let newObj = LANG_BASE;
    let tab = Object.keys(newObj);
    for (let i in tab) {
        let nazwaProp = tab[i];
        if (x[nazwaProp] == "" || x[nazwaProp] == null || x[nazwaProp] == undefined) {
            newObj[nazwaProp] = "";
        }
        else {
            newObj[nazwaProp] = x[nazwaProp];
        }
    }
    document.body.innerHTML = `<textarea cols="50" rows="20">${JSON.stringify(newObj)}</textarea>`;
}
export function loadLanguage(lang = "ENG", callback = (data) => { }) {
    Load.file(`../src/game/language/langs/${lang}.json`, (data) => {
        callback(JSON.parse(data));
        //startGame();
    });
}
