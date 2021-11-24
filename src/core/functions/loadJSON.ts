export function loadJSON (src = "", callback = (data: any) => {}) {
    let x = new XMLHttpRequest();
    x.open("get", src);
    x.onload = () => {
        callback(x.responseText);
    }
    x.send();
}