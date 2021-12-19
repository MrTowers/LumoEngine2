/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */


import { LUMO_ENGINE2 } from "../../LumoEngine2.js";
import { uniqid } from "../functions/uniqid.js";
import { LUMO_settings } from "../LUMO_settings.js";
import { Transform } from "../math/Transform.js";
import { Vector2 } from "../math/Vector2.js";
import { Component } from "./Component.js";

export class GameObject {
    transform: Transform;
    components: Component[];
    tag: string;
    uniqid: string;
    spawned: boolean;

    constructor (tag = "untagged") {
        this.components = [];
        this.transform = new Transform();
        this.tag = tag;
        this.uniqid = uniqid();
        this.spawned = false;
    }

    addComponent (component: Component) : void {
        component.gameObject = this;
        this.components.push(component);
    }

    removeComponentById (id: number) : void {
        this.components.splice(id, 1);
    }

    removeComponentByTag (tag: string) : void {
        for (let i = 0; i < this.components.length; i++) {
            if (this.components[i].tag == tag) {
                this.components.splice(i, 1);
                return;
            }
        }
    }

    getComponentById (id: number) : Component {
        return this.components[id];
    }

    getComponentByTag (tag: string) : Component {
        for (let i in this.components) {
            if (this.components[i].tag == tag) {
                return this.components[i];
            }
        }
        if (LUMO_settings.debug) {
            console.error(`Component with tag "${tag}" cannot be found`);
        }
        
        return new Component();
    }

    getPosition () {
        return this.transform.position;
    }

    setPosition (location: Vector2) {
        this.transform.position = location;
    }

    getRotation () : number {
        return this.transform.rotation;
    }

    setRotation (rotation: number) {
        this.transform.rotation = rotation;
    }

    getZ() : number {
        return this.transform.z;
    }

    setZ(value: number) {
        this.transform.z = value;
        if (this.spawned) {
            LUMO_ENGINE2.recalculateZ();
        }
    }

    render (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        for (let i in this.components) {
            this.components[i].render(ctx, canvas);
        }
    }

    update (delta = 0) {
        for (let i in this.components) {
            this.components[i].update(delta);
        }
    }

    destroy () {
        LUMO_ENGINE2.scene.objects.splice(LUMO_ENGINE2.scene.objects.indexOf(this), 1);
    }

    start () {
        for (let i in this.components) {
            this.components[i].start();
        }
    }
}