import { rand } from "./math/rand.js";
export function uniqid() {
    let date = new Date();
    return `${date.getMonth()}${date.getDay()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}${date.getMilliseconds()}${rand(1000, 9999)}`;
}
