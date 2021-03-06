/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */
export function loadFile(src = "", callback = (data) => { }) {
    let x = new XMLHttpRequest();
    x.open("get", src);
    x.onload = () => {
        callback(x.responseText);
    };
    x.send();
}
