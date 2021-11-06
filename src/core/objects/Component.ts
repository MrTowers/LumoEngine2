import { GameObject } from "./GameObject.js";

export class Component {
    gameObject!: GameObject;
    tag: string;

    constructor () {
        this.tag = "untagged";
    }

    update (delta = 0) {

    }

    render (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        
    }

    onattach () {
        
    }
}