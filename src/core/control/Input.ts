import { LUMO_ENGINE2 } from "../../LumoEngine2.js";
import { Vector2 } from "../math/Vector2.js";

type _buttons = "left" | "middle" | "right";

export class Input {
    private mouse: {
        position: Vector2;
        movement: Vector2;
        lastposition: Vector2;
        buttons: {
            left: boolean;
            right: boolean;
            middle: boolean;
        }
    };

    private keyboard: any;

    constructor () {
        this.mouse = {
            position: new Vector2(),
            movement: new Vector2(),
            lastposition: new Vector2(),
            buttons: {
                left: false,
                right: false,
                middle: false
            }
        };

        this.keyboard = {};

        document.addEventListener("mousemove", (e) => {
            this.mouse.position = new Vector2(e.x, e.y);
        });

        document.addEventListener("mousedown", (e) => {
            if (e.button == 0) {
                this.mouse.buttons.left = true;
            }
            
            if (e.button == 1) {
                this.mouse.buttons.middle = true;
            }

            if (e.button == 2) {
                this.mouse.buttons.right = true;
            }
        });

        document.addEventListener("mouseup", (e) => {
            if (e.button == 0) {
                this.mouse.buttons.left = false;
            }
            
            if (e.button == 1) {
                this.mouse.buttons.middle = false;
            }

            if (e.button == 2) {
                this.mouse.buttons.right = false;
            }
        });

        document.addEventListener("keydown", (e) => {
            this.keyboard[e.key] = true;
        });

        document.addEventListener("keyup", (e) => {
            this.keyboard[e.key] = false;
        });
    }

    update () {
        this.mouse.movement = this.mouse.position.sub(this.mouse.lastposition);
        this.mouse.lastposition = this.mouse.position.clone();
    }

    static getMouseMovement () : Vector2 {
        return LUMO_ENGINE2.input.mouse.movement.clone();
    }

    static getMousePosition () : Vector2 {
        return LUMO_ENGINE2.input.mouse.position.clone();
    }

    static getMouseButton(button: _buttons) : boolean {
        switch (button) {
            case "left": {
                return LUMO_ENGINE2.input.mouse.buttons.left;
            }

            case "right": {
                return LUMO_ENGINE2.input.mouse.buttons.right;
            }

            case "middle": {
                return LUMO_ENGINE2.input.mouse.buttons.middle;
            }
        }
    }

    static getKey (key: string) : boolean {
        if (LUMO_ENGINE2.input.keyboard[key]) {
            return LUMO_ENGINE2.input.keyboard[key];
        }
        else {
            return false;
        }
    }
}