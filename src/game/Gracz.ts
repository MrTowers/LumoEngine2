import { Input } from "../core/control/Input.js";
import { Component } from "../core/objects/Component.js";
import { GameObject } from "../core/objects/GameObject.js";
import { Sprite } from "../core/render/Sprite.js";

class GraczScript extends Component {
    movespeed = 1;
    constructor () {
        super();
    }

    update(delta?: number): void {
        if (Input.getKey("w")) {
            this.gameObject.transform.position.y -= this.movespeed;
        }

        if (Input.getKey("s")) {
            this.gameObject.transform.position.y += this.movespeed;
        }

        if (Input.getKey("a")) {
            this.gameObject.transform.position.x -= this.movespeed;
        }

        if (Input.getKey("d")) {
            this.gameObject.transform.position.x += this.movespeed;
        }
    }
}

export class Gracz extends GameObject {
    constructor () {
        super();
        this.addComponent(new GraczScript());
        let s = new Sprite("gracz");
        s.setSize(50);
        this.addComponent(s);
    }
}